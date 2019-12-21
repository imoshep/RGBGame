var numSquares = 6
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn")
var hardBtn = document.querySelector("#hardBtn")

easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	//generate
	numSquares = 3
	colors = generateRandomColors(numSquares);
	//pick
	pickedColor = pickColor();
	//display
	colorDisplay.textContent = pickedColor;
	//color squares 0-2,3-5
	for(i=0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	//reset h1 background
	h1.style.backgroundColor = null;
});

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	//generate
	numSquares = 6
	colors = generateRandomColors(numSquares);
	//pick
	pickedColor = pickColor();
	//display
	colorDisplay.textContent = pickedColor;
	//color squares
	for(i=0; i<squares.length; i++){
		squares[i].style.display = "block";
		squares[i].style.backgroundColor = colors[i];
	}
	//reset h1 background
	h1.style.backgroundColor = null;
});

resetButton.addEventListener("click", function(){
	//generate new colors
	colors = generateRandomColors(numSquares);
	//pick picked color
	pickedColor = pickColor();
	//display picked color
	colorDisplay.textContent = pickedColor;
	//color squares
	for(i=0; i<squares.length; i++){
	squares[i].style.backgroundColor = colors[i];
	}
	 //reset h1 background
	 h1.style.backgroundColor = null;
	 //reset Play again to New colors
	 resetButton.textContent = "New Colors";
});

colorDisplay.textContent = pickedColor;

//Here's the game functionality i3etself
for(var i=0; i<squares.length; i++){
	// add initial colors to squares
	squares[i].style.backgroundColor = colors[i];
 	
 	// add click listeners to squares
 	squares[i].addEventListener("click", function(){

	 	// grab color of picked square
	 	var clickedColor = this.style.backgroundColor;
	 	// console.log(clickedColor, pickedColor)
	 	// compare color to picked color
	 	if(clickedColor === pickedColor){
	 		messageDisplay.textContent = "Correct!";
	 		changeColors(clickedColor);
	 		h1.style.backgroundColor = clickedColor;
	 		resetButton.textContent = "Play Again?"
	 	} else {
	 		this.style.backgroundColor = "#232323";
	 		messageDisplay.textContent = "Try Again";
	 	}
 	});
 }

 function changeColors(color){
 	//change all squares to one color
	for(var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
 }

function pickColor(){
	var random = Math.floor(Math.random() * colors.length)
	return colors[random];
}

function generateRandomColors(num){
//make an array
var arr = [];
//repeat num times
for(var i=0; i<num; i++){
	//get random color and push into array
	arr.push(randomColor())
}
//return array
return arr;
}

function randomColor(){
	//pick a "red" from 0 to 255
	var r = Math.floor(Math.random()*256)
	//pick a "green" from 0 to 255
	var g = Math.floor(Math.random()*256)
	//pick a "blue" from 0 to 255
	var b = Math.floor(Math.random()*256)
	return "rgb(" + r +", " + g + ", " + b + ")"
}