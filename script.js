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
      col.className = "card col-3";

      const img = document.createElement("img");
      img.className = "w-100 object-fit-cover ";
      img.style.height = "200px";
      img.src = item.img;

      const cardbody = document.createElement("div");
      const title = document.createElement("h5");
      title.innerText = item.title;
      col.appendChild(img);
      row.appendChild(col);
      cardbody.appendChild(title);
    }

    // userObj.data.forEach((card) => {
    // });
  });
