function getComputerChoice(){
  let computerChoice=Math.floor(Math.random()*3);
  switch(computerChoice){
    case 0:{
      return 'rock';
    }
    case 1:{
      return 'paper';
    }
    case 2:{
      return 'scissors';
    }
  }
} 
function getHumanChoice(){
  let humanChoice=prompt("Human Choice");
  let res=false;
  while(res){
    if (humanChoice.toLowerCase()==='rock'||humanChoice.toLowerCase()==='paper'||humanChoice.toLowerCase()==='scissors'){
      res=true;
    }
    humanChoice=prompt('Human Choice');

  }
  return humanChoice.toLowerCase();
}
function playRound(humanChoice,computerChoice){
  switch(humanChoice){ 
    case 'rock':{
      switch(computerChoice){
        case'rock':{
          console.log("Tie");
          return 0;
        }
        case 'paper':{
          console.log("You Lose! Paper beats the Rock");
          return -1;
        }
        case 'scissors':{
          console.log("You win! Rock  beats  the Scissors");
          return 1;
        }
      }
    }
    case 'paper':{
      switch(computerChoice){
        case 'paper':{
          console.log('Tie');
          return 0;
        }
        case'scissors':{
          console.log("You lose! Scissors beats the Paper");
          return -1;
        }
        case'rock':{
          console.log("You win ! Paper beats the Rock");
          return 1;
        }
      }
    }
    case 'scissors':{
      switch(computerChoice){
        case'scissors':{
          console.log("Tie");
          return 0;
        }
        case'rock':{
          console.log("You lose! Rock beats Scissors");
          return -1;
        }
        case 'paper':{
          console.log('You Win!Scissors Beats Paper');
          return 1;
        }
      }
    }
  }
}
function playGame(){
  let humanScore=0;
  let computerScore=0;
  for (let i=0;i<5;i++){
    let humanChoice=getHumanChoice();

    let computerChoice=getComputerChoice();
    console.log('Round : '+(i+1));
    console.log('Human Choice:'+humanChoice);
    console.log('Computer Choice:'+computerChoice);
    let res=playRound(humanChoice,computerChoice);
    if(res===1){
      humanScore++;
    }
    else if(res===-1){
      computerScore++;
    }
  }
  console.log('Human Score:'+humanScore);
  console.log('Computer Score:'+ computerScore);
  if(humanScore>computerScore){
    console.log("Congratulation! You win");
  }
  else{
    console.log("You Lose");
  }
}
playGame();