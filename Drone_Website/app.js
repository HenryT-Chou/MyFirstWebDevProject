
//create a variable called pics, and store the 2 images that I have //for the button to cycle through
var pics = [
  "pictures/horizontal .jpg",
  "pictures/assembly.png"
]

var imgs = document.querySelector("img");
var counter = 0;

//again use the # to identify id's
var realBtn = document.querySelector("#realButton");
// what ever is in the curly braces will activate when button is clicked"
realBtn.addEventListener("click", function(){
  // a function called alert that creates a pop up notification in the broswer
  if(counter === 2){
    counter = 0;
  }
  imgs.src = pics[counter]
  counter = counter + 1;
})


var fakeBtn = document.querySelector("#fakeButton");
fakeBtn.addEventListener("click", function(){
  alert("TRY AGAIN! you clicked the wrong button")
})