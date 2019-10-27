var secretNumber = Math.floor((Math.random() * 10) + 1);

var x = true;
while (x) {
    var guess = Number(prompt("Guess a number"));

    if (guess === secretNumber) {
        alert("you got it right!")
        x = false;
    } else if (guess > secretNumber) {
        alert("Too high")
    } else {
        alert("Too low")
    }
}