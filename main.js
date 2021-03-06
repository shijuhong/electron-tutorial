// 引入 app 和窗口引用
const {
  app,
  BrowserWindow,
  Menu,
  BrowserView,
  globalShortcut,
} = require("electron");
const { menu } = require("./main/menu");

// 初始化 remote
require("@electron/remote/main").initialize();

// 创建窗口函数
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // 集成 node
      nodeIntegration: true,
      // 关闭上下文隔离，兼容 require 引入
      contextIsolation: false,
    },
  });

  // 加载 HTML 文件
  win.loadFile("./pages/copy.html");

  // 注册全局快捷键
  globalShortcut.register("CommandOrControl+E", () => {
    win.loadURL("https://www.baidu.com");
  });
};

// 这段程序将会在 Electron 结束初始化
// 和创建浏览器窗口的时候调用
// 部分 API 在 ready 事件触发后才能使用。
app.whenReady().then(() => {
  createWindow();
  // 创建菜单栏
  Menu.setApplicationMenu(menu);
  app.on("activate", () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// 开启 remote
app.on("browser-window-created", (_, window) => {
  require("@electron/remote/main").enable(window.webContents);
});

// 除了 macOS 外，当所有窗口都被关闭的时候退出程序。 There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on('will-quit', () => {
  // 注销快捷键
  // globalShortcut.unregister('CommandOrControl+X')

  // 注销所有快捷键
  globalShortcut.unregisterAll()
})

// In this file you can include the rest of your app's specific main process
// code. 也可以拆分成几个文件，然后用 require 导入。
