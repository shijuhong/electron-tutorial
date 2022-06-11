const notifyBtn = document.getElementById("notifyBtn");

notifyBtn.addEventListener("click", () => {
  const option = {
    title: "消息标题",
    body: "消息内容",
  };
  new window.Notification(option.title, option);
});
