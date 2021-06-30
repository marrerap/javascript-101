fetch('https://jsonplaceholder.typicode.com/todos')
    .then(function(response) { return response.json(); })
    .then(function(data) {  
        console.log(data[0].completed)  
        const button = document.getElementById('button')
        button.addEventListener('click', function() {
            const list = document.getElementById('list')                         
            for (let count = 0; count < data.length; count++) {
                const listItem = document.createElement('li')
                listItem.textContent = data[count].title;
                if (data[count].completed) {
                    listItem.setAttribute('class', "completed")
                }
                list.appendChild(listItem)                           
        }
        })
            
        
})

// const todoList = document.querySelector('todoList')
// fetch('https://jsonplaceholder.typicode.com/todos')
//     .then((res) => res.json() )
//     .then((todosArray) => {        
//         const todoHtmlArray = todosArray.map((todo) => {            
//             let className = 'incomplete';
//             if (todo.completed); {
//                 className = "completed"
//             }
//             return `<li class="${className}">${todo.title}</li> `;
            
//         })
        
//         todoList.textContent = todoHtmlArray
//         // button.addEventListener('click', function() {
//         //     const list = document.getElementById('list')                         
//         //     for (let count = 0; count < data.length; count++) {
//         //         const listItem = document.createElement('li')
//         //         listItem.textContent = data[count].title;
//         //         list.appendChild(listItem)
                            
//         // }
//         // })
            
        
// })