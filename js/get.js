let dataUser = document.querySelector(".data");

fetch("https://be-2-jakarta-14-production.up.railway.app/get", {
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
              <td>
              <a href="" class="edit">Edit</a>
              <a href="" class="hapus">Delete</a>
              </td>
            </tr>
          </tbody>
        </table>
   
      `;
    });

    dataUser.innerHTML = boxTable;
  })

  .catch((err) => console.log(err));
