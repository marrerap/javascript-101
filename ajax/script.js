
const button = document.querySelector('button')
button.addEventListener('click', function(event) {
button.textContent = 'Generating Doggos...'


fetch('https://dog.ceo/api/breeds/image/random')
  .then(function(response) { return response.json(); })
  .then(function(data) {
    const container = document.getElementById('container')
    const image = document.createElement("img")
    image.setAttribute('src', data.message)
    container.appendChild(image)

    
    

  });
  
})









