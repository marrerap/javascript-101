$(document).ready(function () {
    console.log("document is ready");
  
    // Modifying existing Elements
    // const title = document.getElementById('title')
    const $title = $("#title");
    $title.text("Best Jokes");
    $title.css({
      color: "chartreuse",
      "background-color": "navy"
    });
    const id = $title.attr("id");
    console.log(id);
    $title.attr("class", "fancy");
  
    // Creating new Elements
    const $jokes = $('<div class="jokes">');
    // $(document.body).append($jokes);
    $jokes.appendTo(document.body);
  
    const $button = $('<button class="jokeBtn">Get me a new joke</button>');
    $jokes.append($button);
    // $button.appendTo($jokes);
  
    // events
    // $button.addEventListener("click", function(event){})
    $button.on("click", (event) => {
      // fetch("https://icanhazdadjoke.com", {
      //   headers: {
      //     Accept: "application/json"
      //   }
      // })
      //   .then((res) => res.json())
      //   .then((data) => {
      //     const oldJokes = document.getElementsByClassName("joke");
      //     for (let i = 0; i < oldJokes.length; i++) {
      //       oldJokes[i].remove();
      //     }
      //     const newJoke = document.createElement("div");
      //     newJoke.classList.add("joke");
      //     newJoke.textContent = data.joke;
      //     $jokes.get(0).appendChild(newJoke);
      //   });
  
      $.ajax({
        url: "https://icanhazdadjoke.com",
        headers: {
          Accept: "application/json"
        }
      }).then((data) => {
        $(".joke").hide("puff");
        $(`<div class="joke">${data.joke}</div>`).hide().appendTo($jokes).show("puff");
      });
    });
  });
  