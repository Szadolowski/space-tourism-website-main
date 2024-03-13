var NavElements = {
    Nav1: document.getElementById('Nav1'),
    Nav2: document.getElementById('Nav2'),
    Nav3: document.getElementById('Nav3'),
    Nav4: document.getElementById('Nav4')
  };

  IMG = document.getElementById('IMG');
  Name = document.getElementById('Name');
  Description = document.getElementById('Description');
  Distance = document.getElementById('Distance');
  Travel = document.getElementById('Travel');


fetch('data.json')
    .then(reponse => {
        if(!reponse.ok){
            throw new Error("Błąd pobierania danych");
        }
        
        return reponse.json();
    })

    .then(data => {
        NavElements["Nav1"].addEventListener('click', function() { ChangeNav(1); });
        NavElements["Nav2"].addEventListener('click', function() { ChangeNav(2); });
        NavElements["Nav3"].addEventListener('click', function() { ChangeNav(3); });
        NavElements["Nav4"].addEventListener('click', function() { ChangeNav(4); });

        function ChangeNav(id){
            for(let i = 1; i <= 4; i++){
                if(i == id){
                    NavElements["Nav"+i].className = "NavSwitch NavSwitch--active";
                }else{
                    NavElements["Nav"+i].className = "NavSwitch NavSwitch--hover";
                }
            }

            IMG.src = data['destinations'][id-1]['images']['webp'];
            IMG.alt = data['destinations'][id-1]['name'];
            Name.innerHTML = data['destinations'][id-1]['name'].toUpperCase();
            Description.innerHTML = data['destinations'][id-1]['description'];
            Distance.innerHTML = data['destinations'][id-1]['distance'].toUpperCase();
            Travel.innerHTML = data['destinations'][id-1]['travel'].toUpperCase();
        }
    })

    .catch(error => {
        console.log('Wystąpił błąd:', error);
    })