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
    body: "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance",
    author: "– Charles Lindbergh",
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

