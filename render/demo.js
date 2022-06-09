const { BrowserWindow, Menu, getCurrentWindow } = require("@electron/remote");

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

// 右键菜单内容
const menuList = [
  { role: "copy", label: "复制", accelerator: "cmd+c" },
  { role: "paste", label: "粘贴", accelerator: "cmd+d" },
];

const contextmenu = Menu.buildFromTemplate(menuList);

// 右键触发事件
window.addEventListener("contextmenu", (e) => {
  // 阻止默认行为
  e.preventDefault();
  contextmenu.popup({ window: getCurrentWindow() });
});
