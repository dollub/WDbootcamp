age = prompt("What is your age?")

if (age < 0) {
    alert("Error - that age don't exist hun");
}
 else if (age === 21) {
    alert("Happy 21st birthday!");
}
 else if (age % 2 === 1) {
    alert("Your age is Odd!!!");
} 

if (age % Math.sqrt(age) === 0) {
    alert("perfect square!");
}