const { BrowserWindow } = require("@electron/remote");

const btn = document.querySelector("#btn");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 500,
    height: 500,
  });
  win.loadFile("newPage.html");
};

window.onload = function () {
  btn.addEventListener("click", createWindow);
};
