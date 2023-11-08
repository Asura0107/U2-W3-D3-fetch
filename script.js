fetch("https://striveschool-api.herokuapp.com/books")
  .then((response) => {
    console.log(response);
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("error");
    }
  })
  .then((userObj) => {
    console.log(userObj);
    for (let i = 0; i < userObj.length; i++) {
      const row = document.querySelector(".row");
      const item = userObj[i];

      const col = document.createElement("div");
      col.className = "card col-3 gy-3 ";

      const img = document.createElement("img");
      img.className = "card-img-top object-fit-cover";
      img.style.height = "200px";
      img.src = item.img;

      const cardbody = document.createElement("div");
      const title = document.createElement("h6");
      title.innerText = item.title;
      title.className = "card-title";

      const btnwaste = document.createElement("button");
      btnwaste.innerText = "Delate";
      btnwaste.onclick = () => {
        col.className = "d-none";
      };

      const price = document.createElement("p");
      price.innerText = "$ " + item.price;
      price.className = "card-text";
      row.appendChild(col);
      col.appendChild(img);
      cardbody.appendChild(title);
      col.appendChild(cardbody);
      cardbody.appendChild(price);
      cardbody.appendChild(btnwaste);
    }

    // userObj.data.forEach((card) => {
    // });
  });
