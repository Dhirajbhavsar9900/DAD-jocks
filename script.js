let key = "/OTRDlWxT+FZ5ADPi5xMxA==JxA8Cbmzj9pqm5Un";
let joke = document.getElementById("joke");
// let minahttp ="https://api.api-ninjas.com/v1/jokes?limit=1";

// const xhr = new XMLHttpRequest();
// xhr.open('GET', `https://api.api-ninjas.com/v1/jokes?limit=1`);
// xhr.setRequestHeader("x-Api-key", key);
// xhr.onload = () => {
//     const response = JSON.parse(xhr.response);
//     console.log(response);
//     }
//         xhr.onerror = () => { console.log("Error occurred!"); };
// xhr.send();


function show() {
    let datarequest = fetch("https://api.api-ninjas.com/v1/jokes?limit=1", {
  headers: {
    "x-Api-key": key
  },
});

datarequest.then(response => response.json())
.then(parsedResponse => {
    // console.log(parsedResponse);
    parsedResponse.forEach(element => {

        joke.innerText = element.joke;

        // console.log(element.joke);    
    });
})
// console.log(datarequest);
// btn.innerText= ""
}


let btn = document.querySelector("button");

joke.innerText = "Dad Joke"
// btn.innerText= "Tell me a joke"
btn.addEventListener("click", () =>{
  btn.innerText= "Loading ..."
  joke.innerText = "updating..."
  setTimeout(() => {
    btn.innerText = "Tell me a joke";
  }, 2000);
    show();

});

