const { dialog } = require("@electron/remote");
const fs = require("fs");

const openBtn = document.getElementById("openBtn");
openBtn.addEventListener("click", async () => {
  // 这个方法是异步的，返回的是用户选择的文件
  try {
    const result = await dialog.showOpenDialog({
      // 文件对话框标题
      title: "请选择文件",
      // 限制文件类型
      filters: [{ name: "Images", extensions: ["jpg", "png", "gif"] }],
      // 自定义按钮
      buttonLabel: "打开图片",
    });
    console.log(result);
    const img = document.getElementById("img");
    img.setAttribute("src", result.filePaths[0]);
  } catch (error) {
    console.log(error);
  }
});

const saveBtn = document.getElementById("saveBtn");
saveBtn.addEventListener("click", async () => {
  try {
    const result = await dialog.showSaveDialog({
      title: "保存文件",
    });
    // result.filePath 是保存的路径
    fs.writeFile(result.filePath, "hello", (error) => {
      if (error) {
        console.log(`创建失败：${error}`);
      } else {
        console.log("创建成功");
      }
    });
  } catch (error) {
    console.log(error);
  }
});

const messageBtn = document.getElementById("messageBtn");
messageBtn.addEventListener("click", async () => {
  try {
    const result = await dialog.showMessageBox({
      // 对话框类型
      type: "info",
      title: "这是个普通的对话框",
      message: "点击啥反应没有",
      // 按钮显示文本，value 值为 index，重点
      buttons: ["不点了", "点一下", "点我"],
    });
    const value = result.response;
    // ......
  } catch (error) {
    console.log(error);
  }
});
