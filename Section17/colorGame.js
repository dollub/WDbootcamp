var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
	setupModeButtons();
	setUpSquares();
	reset();
}

function setupModeButtons() {
	// mode button event listeners
	for (var i = 0; i < modeButtons.length;i++) {
		modeButtons[i].addEventListener("click",function (){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
			reset();
		})
	}
}

function setUpSquares(){
	for(var i = 0; i < squares.length; i++){
		//add click listeners to squares
		squares[i].addEventListener("click", function() {
			//grab color of clicked squares
			var clickedColor = this.style.background;
			//compare color to pickedColor
			if(clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct!";
				h1.style.backgroundColor = clickedColor;
				changeColors(clickedColor);
				resetButton.textContent = "Play Again?";
			} else {
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}

function reset() {
	resetButton.textContent = "New Colors"
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
	} else {
			squares[i].style.display = "none";
	}
	}
	h1.style.background = "steelblue";
	messageDisplay.textContent = "";
}

resetButton.addEventListener("click", function(){
	reset();
})

colorDisplay.textContent = pickedColor;

function changeColors(color){
	for (var i = 0; i < squares.length; i++){
		squares[i].style.background = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	// make an array
	var arr = [];
	// add num random colors to array
	for (var i = 0; i < num; i++){
		arr.push(randomColor());
	}
	// return that array
	return arr;
}

function randomColor() { 
	// pick a red from 0 to 255
	var r = Math.floor(Math.random() * 256);
	// pick a g from 0 to 255	
	var g = Math.floor(Math.random() * 256);
	// pick a b from 0 to 255	
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
