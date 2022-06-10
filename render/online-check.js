// offline -> online 网络连接的瞬间触发
window.addEventListener("online", () => {
  alert("恢复网络~~~");
});

// on-line -> offline 断网的瞬间触发
window.addEventListener("offline", () => {
  alert("断网了...");
});
