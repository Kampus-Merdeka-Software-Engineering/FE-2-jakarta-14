let form = document.querySelector(".book-now");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("nama").VALUE;
  let nomer = document.getElementById("nomer").VALUE;
  let tanggal_masuk = document.getElementById("tanggal_masuk").VALUE;
  let tanggal_keluar = document.getElementById("tanggal_keluar").VALUE;

  let dataOrder = { name, nomer, tanggal_masuk, tanggal_keluar };

  fetch("http://localhost:9900/", {
    method: "POST",
    headers: {
      "Content-Type": "Application-Json",
    },

    body: JSON.stringify(dataOrder),
  })
    .then((Response) => Response.json())
    .then((Response) => {
      console.log(Response);
    })

    .catch((err) => {
      console.log(err);
    });
});
