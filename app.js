
//create a variable called pics, and store the 2 images that I have //for the button to cycle through
var pics = [
  "pictures/horizontal.png",
  "pictures/assembly.png"
]

//find the first instance of "real_button" and store it to the var called btn
var btn = document.querySelector("button");
// what ever is in the curly braces will activate when button is clicked"
btn.addEventListener("click", function(){
  // a function called alert that creates a pop up notification in the broswer
  alert("you clicked the real button!")
})