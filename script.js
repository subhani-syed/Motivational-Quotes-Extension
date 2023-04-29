async function apiCall(){


    document.getElementById("quote").innerHTML = `Loading <i class="fa fa-solid fa-spinner fa-spin"></i>`;
    
    const res = await fetch("https://dummyjson.com/quotes/random")
    const data = await res.json();

    document.getElementById("quote").innerHTML = data.quote;

}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').addEventListener('click', apiCall);      
});

apiCall();

console.log("Quote is working...")