const { shell } = require("electron");

const baidu = document.getElementById("baidu");
baidu.addEventListener("click", (e) => {
  e.preventDefault();
  // 获取当前元素的 href
  const baiduHref = baidu.getAttribute("href");
  shell.openExternal(baiduHref);
});
