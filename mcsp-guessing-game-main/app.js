play(); 





function play(){

    var max = 25;
    var min = 1;
    var stillPlaying = true;
    var randomNum = Math.floor((Math.random() * max) + min);
    var attempts = 0;
    var history = [];
    var name = "";
    var guess;
    var previousAttempts;
    
    name = prompt("What is your name?");
    name = name.charAt(0).toUpperCase() + name.slice(1);
  
while (stillPlaying){
  attempts++;
  guess = prompt("Hey there, " + name + "! " + "Lets play a guessing game. Pick a number between" + min + " and " + max + ".");
  history.push(guess);

if(guess < randomNum) {
  alert("OOF, you should guess a higher number, " + name + "!");
} else if(guess > randomNum) {
  alert("Oh no, its a lower number than that, " + name + "!")
}else if(guess == randomNum){
  if(previousAttempts === undefined){
        alert("Great job, " + name + "! You guessed the answer right in just " + attempts + " attempts!" + "\nHere's all your attempts:" + history.join(", "));
}else if(attempts < previousAttempts) {
        alert("Wow!, " + name + "! You guessed right again! You beat your last attempts by " + (previousAttempts - attempts) + " attempts!" + "\nHere's all your attempts:" + history.join(", "));
}else if(attempts > previousAttempts) {
        alert("You got it, " + name + "! You did better last attempt by " + (previousAttempts - attempts) + ", but that okay!" + "\nHere's all your attempts:" + history.join(", "));
}else if(attempts == previousAttempts) {
        alert("Correct! Good job " + name + "! You got it in the same amount of attempts as last time with " + attempts + " tries!" + "\nHere's all your attempts:" + history.join(", "));
}
previousAttempts = attempts;
  stillPlaying = playAgain(name);
  randomNum = Math.floor((Math.random() * max) + min);
  history = [];
  attempts = 0;

}else {
  alert("Error")
}
}
}

  
function playAgain(name){
    let replay = prompt("Do you want to try again " + name + "?");
  if(replay == "yes" || replay == "Yes"){
    return true;
  }else {
    alert("Thanks for playing! See you next time " + name + "!");
  }
}

