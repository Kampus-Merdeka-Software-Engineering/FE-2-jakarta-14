const urlAPI = "https://be-2-jakarta-14-production.up.railway.app/";

let form = document.querySelector(".book-now");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("nama").value;
  let nomer = document.getElementById("nomer").value;
  let tanggal_masuk = document.getElementById("tanggal_masuk").value;
  let tanggal_keluar = document.getElementById("tanggal_keluar").value;

  const postData = {
    full_name: name,
    phone: nomer,
    check_in: tanggal_masuk,
    check_out: tanggal_keluar,
  };

  const apiUrl = "https://be-2-jakarta-14-production.up.railway.app/post";

  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Response:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
