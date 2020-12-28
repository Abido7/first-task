let btn = document.getElementById("btn");
let demo = document.getElementById("demo");
let author = document.getElementById("author")

let sayings = []

let magdy = {
    body: "“How wonderful it is that nobody need wait a single moment before starting to improve the world.”",
    author: "– Anne Frank"
}
sayings.push(magdy)

let mahmoud = {
    body: "mahmoud nageh",
  author: "– Anne Frank",
}
sayings.push(mahmoud)

let yehia = {
    body: "yehia tarek",
    author: "– Anne Frank",
}
sayings.push(yehia)

let hussein = {
    body: "mohamed hussein",
    author: "– Anne Frank",
}
sayings.push(hussein)

let heba = {
    body: "heba nagib",
    author: "– Anne Frank",
}
sayings.push(heba)


btn.addEventListener ("click", function (){
    let index= Math.floor(Math.random()*5);
    console.log(index)
    demo.innerHTML = sayings[index].body;
    author.innerHTML = sayings[index].author;
})

