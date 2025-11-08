fetch("./assets/components/header.html")
  .then(res => res.text())
  .then(data => document.getElementById("header").innerHTML = data)
  .catch(err => console.error("Lỗi header:", err));
