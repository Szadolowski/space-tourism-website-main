var RadioElements = {
  Radio1: document.getElementById("Radio1"),
  Radio2: document.getElementById("Radio2"),
  Radio3: document.getElementById("Radio3"),
  Radio4: document.getElementById("Radio4"),
};

IMG = document.getElementById("IMG");
Name = document.getElementById("Name");
Role = document.getElementById("Role");
Bio = document.getElementById("Bio");

fetch("data.json")
  .then((reponse) => {
    if (!reponse.ok) {
      throw new Error("Błąd pobierania danych");
    }

    return reponse.json();
  })

  .then((data) => {
    RadioElements["Radio1"].addEventListener("click", function () {
      ChangeRadio(1);
    });
    RadioElements["Radio2"].addEventListener("click", function () {
      ChangeRadio(2);
    });
    RadioElements["Radio3"].addEventListener("click", function () {
      ChangeRadio(3);
    });
    RadioElements["Radio4"].addEventListener("click", function () {
      ChangeRadio(4);
    });

    function ChangeRadio(id) {
      for (let i = 1; i <= 4; i++) {
        if (i == id) {
          RadioElements["Radio" + i].className = "CrewRadio CrewRadio--Active";
        } else {
          RadioElements["Radio" + i].className = "CrewRadio";
        }
      }

      IMG.src = data["crew"][id - 1]["images"]["webp"];
      IMG.alt = data["crew"][id - 1]["name"];
      Name.innerHTML = data["crew"][id - 1]["name"].toUpperCase();
      Role.innerHTML = data["crew"][id - 1]["role"].toUpperCase();
      Bio.innerHTML = data["crew"][id - 1]["bio"];
    }
  })

  .catch((error) => {
    console.log("Wystąpił błąd:", error);
  });
