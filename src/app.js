/* eslint-disable */
// import "bootstrap";
// import "./style.css";
// import "./index.html";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

let excuseGenerator = () => {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying",
  ];
  function random(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  return (
    random(who) + " " + random(action) + " " + random(what) + " " + random(when)
  );
};

window.onload = function() {
  //write your code here
  document.querySelector("#excuse").innerHTML = excuseGenerator();
  document.querySelector("#button").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = excuseGenerator();
  });
  console.log("Hello Rigo from the console!");
};
