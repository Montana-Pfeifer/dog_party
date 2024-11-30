var form = document.querySelector(".hero form");
var input = document.querySelector("#dog-name");
var headerText = document.querySelector(".hero h1 strong");

// console.log("Form:", form);

// console.log("Input:", input);

// console.log("Header Text:", headerText);

  

form.addEventListener("submit", function (event) {
  event.preventDefault();
  var dogName = input.value;
  headerText.innerText = dogName;
});
