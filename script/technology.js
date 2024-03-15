var SliderElements = {
    Slider1: document.getElementById('Slider1'),
    Slider2: document.getElementById('Slider2'),
    Slider3: document.getElementById('Slider3')
  };

  IMG = document.getElementById('IMG');
  Name = document.getElementById('Name');
  Description = document.getElementById('Description');


fetch('data.json')
    .then(reponse => {
        if(!reponse.ok){
            throw new Error("Błąd pobierania danych");
        }
        
        return reponse.json();
    })

    .then(data => {
        SliderElements["Slider1"].addEventListener('click', function() { ChangeSlider(1); });
        SliderElements["Slider2"].addEventListener('click', function() { ChangeSlider(2); });
        SliderElements["Slider3"].addEventListener('click', function() { ChangeSlider(3); });

        function ChangeSlider(id){
            for(let i = 1; i <= 3; i++){
                if(i == id){
                    SliderElements["Slider"+i].className = "SliderTechnology SliderTechnology--active";
                }else{
                    SliderElements["Slider"+i].className = "SliderTechnology SliderTechnology--hover";
                }
            }

            IMG.src = data['technology'][id-1]['images']['portrait'];
            IMG.alt = data['technology'][id-1]['name'];
            Name.innerHTML = data['technology'][id-1]['name'].toUpperCase();
            Description.innerHTML = data['technology'][id-1]['description'];
        }
    })

    .catch(error => {
        console.log('Wystąpił błąd:', error);
    })