const fs = require("fs");
const path = require("path");

window.onload = function () {
  const btn = document.querySelector("#btn");
  const sports = document.querySelector("#sports");
  btn.addEventListener("click", function () {
    const filePath = path.resolve(__dirname, "sport.txt");
    fs.readFile(filePath, (err, data) => {
      sports.innerHTML = data;
    });
  });
};
