let dataUser = document.querySelector(".data");

fetch("http://localhost:9900/", {
  method: "get",
})
  .then((res) => res.json())
  .then((res) => {
    let boxTable = "";

    res.forEach((box) => {
      // console.log(box);

      boxTable += `
      
        <table>          
          <tbody>
            <tr>
              <td>${box.full_name}</td>
              <td>${box.phone}</td>
              <td>D${box.check_in}</td>
              <td>${box.check_out}</td>
            </tr>
          </tbody>
        </table>
   
      `;
    });

    dataUser.innerHTML = boxTable;
  })

  .catch((err) => console.log(err));
