let btn = document.getElementById("btn");
let demo = document.getElementById("demo");
let author = document.getElementById("author");

let sayings = [];

let magdy = {
  body:
    "How wonderful it is that nobody need wait a single moment before starting to improve the world.",
  author: "Anne Frank",
};
sayings.push(magdy);

let mahmoud = {
  body: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  author: "Albert Einstein",
};
sayings.push(mahmoud);

let yehia = {
  body:
    "Someone said do not be afraid to start over again. This time you are not starting from scratch, you are starting from experience",
  author: "Anne Frank",
};
sayings.push(yehia);

let hussein = {
  body:
    "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance.",
  author: "– Charles Lindbergh",
};
sayings.push(hussein);

let heba = {
  body: "Learn from the mistakes of others. You can't live long enough to make them all yourself",
  author: "Eleanor Roosevelt",
};
sayings.push(heba);

demo.innerHTML = sayings[0].body;
author.innerHTML = sayings[0].author;

btn.addEventListener("click", function () {
  let index = Math.floor(Math.random() * 5);
  demo.innerHTML = sayings[index].body;
  author.innerHTML = sayings[index].author;
});
