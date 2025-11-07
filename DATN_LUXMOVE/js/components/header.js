// js/main.js
document.addEventListener("DOMContentLoaded", () => {
  fetch("./assets/components/header.html")
    .then(response => {
      if (!response.ok) {
        throw new Error("Không thể tải header.html");
      }
      return response.text();
    })
    .then(data => {
      document.getElementById("header").innerHTML = data;
    })
    .catch(error => console.error(error));
});
