const { clipboard } = require("@electron/remote");

const code = document.getElementById("code");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  // 剪贴板写入内容
  clipboard.writeText(code.innerHTML);
  new window.Notification("复制成功", { body: "提示内容" });
});
