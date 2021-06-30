fetch('https://dog.ceo/api/breeds/list')
    .then(function(response) { return response.json(); })
    .then(function(data) {
       const select = document.getElementById('select')              
          for (let count = 0; count < data.message.length; count++) {
            const option = document.createElement('option')
            option.textContent = data.message[count];
            select.appendChild(option)            
       }
       select.addEventListener('change', function(event) {
         fetch(`https://dog.ceo/api/breed/${event.target.value}/images/random`)
            .then(function(response){ return response.json(); })
            .then(function(data) {
               const container2 = document.getElementById('container2')
               const image = document.createElement('img')
               image.setAttribute('src', data.message)
               image.setAttribute('id', "images")
               container2.appendChild(image)
            })
          
         
       })
       select.addEventListener('change', function() {
          const remove = document.getElementById('images')
          remove.remove();
       }) 
    })