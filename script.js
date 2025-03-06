 window.onload = () => {
   let computerScore = 0;
   let userScore = 0;
   let roundCounter = 0;

   const roundMessage = document.querySelector("#roundMessage");
   const scoreTracker = document.querySelector("#scoreTracker");

  function getComputerChoice(){
   let number = Math.floor(Math.random() * 3); //returns 0, 1 or 2
   switch(number){
      case 0: 
         document.getElementById("enemy-image").src="./images/hacker.png"
         return "hacker";
      case 1:
         document.getElementById("enemy-image").src="./images/mercenary.png"
         return "mercenary";
      case 2: 
      document.getElementById("enemy-image").src="./images/cyborg.png"
         return "cyborg";
   }
  }

  function roundEvaluation(humanSelection, computerSelection){
   if(humanSelection === computerSelection){
      roundMessage.textContent = `The close matched, ${humanSelection} vs. ${computerSelection}, ends in a stalemate`;
   } else if((humanSelection === "hacker" && computerSelection === "cyborg") ||
   (humanSelection === "mercenary" && computerSelection === "hacker") ||
   (humanSelection === "cyborg" && computerSelection === "mercenary")){
      roundMessage.textContent = `It's not even close , your ${humanSelection} beats the enemy ${computerSelection}, you win!`;
      userScore++;
   } else if((humanSelection === "hacker" && computerSelection === "mercenary") ||
   (humanSelection === "mercenary" && computerSelection === "cyborg") ||
   (humanSelection === "cyborg" && computerSelection === "hacker")){
      roundMessage.textContent = `The enemy ${computerSelection} takes care of your ${humanSelection} agent, you lose against the machine, for now`
      computerScore++;
   }
   roundCounter++;
  }

  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((button) => {
   button.addEventListener("click", () => {
      const userChoice = button.id;
      const compChoice = getComputerChoice();
      document.getElementById("ally-image").src=`./images/${button.id}.png`
      roundEvaluation(userChoice, compChoice);
      scoreTracker.textContent = `Current score for round ${roundCounter} is ${userScore} : ${computerScore}`;
      if(userScore === 5){
         roundMessage.textContent = "You have triumphed over your enemy, you now rule this megacity's underworld, sweet!";
         userScore = 0;
         computerScore = 0;
         roundCounter = 0;
         document.getElementById("enemy-image").src="./images/question.png";
         document.getElementById("ally-image").src="./images/question.png";
      } else if(computerScore === 5){
         roundMessage.textContent = "You have failed, you will have to run from the AI and its goons for the rest of your days";
         userScore = 0;
         computerScore = 0;
         roundCounter = 0;
         document.getElementById("enemy-image").src="./images/question.png";
         document.getElementById("ally-image").src="./images/question.png";
      }
   })
  })
}