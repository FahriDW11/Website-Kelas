let usersAuth = [];

fetch("../auth/data.json")
  .then((response) => response.json()) // Mengubah response menjadi objek JSON
  .then((data) => (usersAuth = data)) // Menampilkan data ke console
  .catch((error) => console.error("Gagal membaca file:", error));

let hideOpacity;
let hideVisible;
function login() {
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const alertPopup = document.getElementById("alert");
  let valid = false;
  console.log(usersAuth);

  usersAuth.forEach((data) => {
    if (data.username === username.value) {
      if (data.password === password.value) {
        valid = true;
      }
    }
  });

  if (valid) {
    alert("wkwk");
  } else {
    console.log(hideOpacity);
    console.log(hideVisible);

    clearTimeout(hideOpacity);
    clearTimeout(hideVisible);
    alertPopup.style.visibility = "visible";
    alertPopup.style.opacity = "100%";
    hideOpacity = setTimeout(() => {
      alertPopup.style.opacity = "0%";
    }, 2300);
    hideVisible = setTimeout(() => {
      alertPopup.style.visibility = "hidden";
    }, 2500);
  }
}
