fetch('https://jsonplaceholder.typicode.com/users')
    .then(function(response) { return response.json(); })
    .then(function(data) {
       
       const select = document.getElementById('select')              
          for (let count = 0; count < data.length; count++) {
            const option = document.createElement('option')
            option.textContent = data[count].name
            option.setAttribute('value', data[count].id)
            select.appendChild(option)            
       }
       select.addEventListener('change', function(event) {
         fetch(`https://jsonplaceholder.typicode.com/users/${event.target.value}`)
            .then(function(response){ return response.json(); })
            .then(function(data) {
               
               const {street, city, suite, zipcode} = data.address
               const container2 = document.getElementById('container2')
               const nameBlock = document.createElement('p')
               nameBlock.textContent = `Name: ${data.name}`
               nameBlock.setAttribute('class', "name")
               nameBlock.setAttribute('id', "name")
               const addressBlock = document.createElement('p')
               addressBlock.setAttribute('class', "address")
               addressBlock.setAttribute('id', "address")
               addressBlock.textContent = `Address: ${street} Suite: ${suite} City: ${city} Zipcode: ${zipcode}`
               container2.appendChild(nameBlock)
               container2.appendChild(addressBlock)
               })
         fetch(`https://jsonplaceholder.typicode.com/users/${event.target.value}/todos`)
            .then(function(response){ return response.json(); })
            .then(function(data) {
               const container3 = document.getElementById('container3')
               const todoList = document.createElement("ol")
               todoList.setAttribute('id', 'listeroo')
               container3.appendChild(todoList)
               data.forEach(todo => {                  
                  container3.appendChild(todoList)
                  const listItem = document.createElement('li')
                  listItem.textContent = todo.title
                  todoList.appendChild(listItem)
                  if(todo.completed) {
                  listItem.setAttribute("class", 'completed')
                  }   


               });

               
            })
         
       })
       select.addEventListener('change', function() {
          const removeList = document.getElementById('listeroo')
          const removeName = document.getElementById('name')
          const removeAddress = document.getElementById('address')
          removeList.remove()
          removeName.remove()
          removeAddress.remove()
       }) 
    })