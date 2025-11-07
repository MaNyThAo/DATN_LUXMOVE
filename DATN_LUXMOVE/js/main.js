// Tải header và footer vào index.html
document.addEventListener("DOMContentLoaded", () => {
  // Gọi header
  fetch("../assets/components/header.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("header").innerHTML = data;
    })
    .catch(err => console.error("Lỗi khi tải header:", err));

  // Gọi footer
  fetch("../assets/components/footer.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    })
    .catch(err => console.error("Lỗi khi tải footer:", err));
});
