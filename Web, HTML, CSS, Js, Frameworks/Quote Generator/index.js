var button = document.querySelector("button");
var card = document.querySelector(".card")


async function loadQuote(){
    card.innerHTML = ("Loading ...")
    let url = "https://api.kanye.rest/";
    let response = await fetch(url);
    console.log(response);
    let data = await response.json();
    console.log(data);
    card.innerHTML = data.quote;
}

button.addEventListener("click", loadQuote);


