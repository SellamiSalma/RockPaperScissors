function getComputerChoice(){
  let computerChoice=Math.floor(Math.random()*3);
  switch(computerChoice){
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2: 
      return 'scissors';
  }
}
function playRound(e){
  let playerChoice=e.target.id;
  let computerChoice=getComputerChoice();
  let playerChoiceDisplay=document.querySelector('.player-choice');
  let computerChoiceDisplay=document.querySelector('.computer-choice');
  let result=document.querySelector('.text-result');
  playerChoiceDisplay.textContent=playerChoice;
  playerChoiceDisplay.style.color='blue';
  computerChoiceDisplay.style.color='blue';
  computerChoiceDisplay.textContent=computerChoice;
  result.style.color='#4040FF';
  switch(playerChoice){
    case 'rock':{

      switch(computerChoice){
        case 'rock':{
          result.textContent='Tie';
          return 0;
        }
        case 'paper':{
          result.textContent='You lose! Paper beats Rock';
          return -1;
        }
        case 'scissors':{
          result.textContent='You Win! Rock beats Scissors'
         return 1;
        }
      }
    }
    case 'paper':{
      switch(computerChoice){
        case'paper':{
          result.textContent='Tie!';
          return 0;
        }
        case 'scissors':{
          result.textContent='You lose! Scissors beats Paper';
          return -1;
        }
        case 'rock':{
          result.textContent='You win! Paper beats Rock';
          return 1;
        }
      }
}
    case 'scissors':{
      switch(computerChoice){
        case 'scissors':{
          result.textContent='Tie!';
          return 0;
        }
        case 'rock':{
          result.textContent='You lose! Rock beats Scissors';
         return -1;
        }
        case 'paper':{
          result.textContent='You win! Scissors beats Paper';
          return 1;
        }
      }
    }
  }
}

function playGame(){
  let computerScore=0;
  let playerScore=0;  
  let i=0;
  let player_Score=document.querySelector('.player-score');
  player_Score.textContent=playerScore;
  player_Score.style.color='blue';
  let computer_score=document.querySelector('.computer-score');
  computer_score.textContent=computerScore;
  computer_score.style.color='blue';
  let buttons=document.querySelectorAll('button');
      buttons.forEach((button)=>{
      button.addEventListener('click',function(e){

        let res=playRound(e);

        if(res==1){
          playerScore++;
          player_Score.textContent=playerScore;

        }
        else if(res==-1){
          computerScore++;
          computer_score.textContent=computerScore;
        }
        if(playerScore===5){
          window.location.href='../pages/playerWinner.html';
        }
        else if(computerScore===5){
          window.location.href='../pages/computerWinner.html';
        }
      })
    })
    
  }



playGame();
