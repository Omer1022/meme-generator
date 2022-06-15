"use strict";

var gMeme;

function getCurrLine() {
  var currLineIdx = gMeme.selectedLineIdx;
  return gMeme.lines[currLineIdx];
}

function createMeme(imgId) {
  gMeme = {
    selectedImgId: imgId,
    selectedLineIdx: 0,
    isPrint: false,
    lines: [
      {
        txt: "Text",
        size: 40,
        align: "center",
        color: "white",
        pos: { x: 200, y: 50 },
        font: "impact",
        isDragging: false,
      },
    ],
  };
  return gMeme;
}

function getMeme() {
  return gMeme;
}

function setText(txt) {
  gMeme.lines[gMeme.selectedLineIdx].txt = txt;
}

function addLine() {
  gMeme.selectedLineIdx++;
  var newLine = {
    txt: "Text",
    size: 40,
    align: "center",
    color: "white",
    pos: getNewLinePos(gMeme.lines.length),
    font: "impact",
    isDragging: false,
  };
  gMeme.lines.push(newLine);
}

function switchLine() {
  if (gMeme.selectedLineIdx === gMeme.lines.length - 1) {
    gMeme.selectedLineIdx = 0;
  } else {
    gMeme.selectedLineIdx++;
  }
}

function removeLine() {
  var currLineIdx = gMeme.selectedLineIdx;
  if (gMeme.lines.length === 1) return;
  gMeme.lines.splice(currLineIdx, 1);
  gMeme.selectedLineIdx = 0;
}

function getNewLinePos(idx) {
  switch (idx) {
    case 0:
      return { x: 200, y: 50 };
    case 1:
      return { x: 200, y: 350 };
    case 2:
      return { x: 200, y: 200 };
    default:
      return { x: 200, y: 200 };
  }
}

function changeFontSize(diff) {
  var currLine = getCurrLine();
  currLine.size += diff;
}

function setTextAlign(alignKey) {
  var currLine = getCurrLine();
  currLine.align = alignKey;
}

function setFont(font) {
  var currLine = getCurrLine();
  currLine.font = font;
}

function ChangeTextPosY(diff) {
  var currLine = getCurrLine();
  currLine.pos.y += diff;
}

function ChangeTextPosX(diff) {
  var currLine = getCurrLine();
  currLine.pos.x += diff;
}

function shareMeme(uploadedImgUrl) {
  document.querySelector(".share-btn").innerHTML = `
  <a class="btn" href="https://www.facebook.com/sharer/sharer.php?u=${encodedUploadedImgUrl}&t=${encodedUploadedImgUrl}" title="Share on Facebook" target="_blank" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}'); return false;">
     Share   
  </a>`;
}
