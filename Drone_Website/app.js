
//create a variable called pics, and store the 2 images that I have //for the button to cycle through
var pics = [
  "pictures/horizontal.png",
  "pictures/assembly.png"
]

//again use the # to identify id's
var realBtn = document.querySelector("#realButton");
// what ever is in the curly braces will activate when button is clicked"
realBtn.addEventListener("click", function(){
  // a function called alert that creates a pop up notification in the broswer
  alert("CONGRATS!!! you clicked the real button!")
})

var fakeBtn = document.querySelector("#fakeButton");
fakeBtn.addEventListener("click", function(){
  alert("TRY AGAIN! you clicked the wrong button")
})