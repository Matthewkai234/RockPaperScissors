let score= JSON.parse(localStorage.getItem('score')) || {
    Wins: 0,
    Losses:0,
    Ties:0
   }

    
    

    let computerMove='';
function playGame(playerMove){
    const randomNumber=Math.random();

    localStorage.getItem('score');
        if(randomNumber>=0&&randomNumber<1/3){
            computerMove='Rock';
        }
        else if(randomNumber>=1/3&&randomNumber<2/3){
            computerMove='Paper';
        }
        else if(randomNumber>=2/3&&randomNumber<1){
            computerMove='Scissors';
        }
    
    let result;
        
        if(playerMove==='Rock'){
            if(computerMove==='Rock'){
                result='Tie.';
            }else if(computerMove==='Scissors'){
                result='You win.';
            }else if(computerMove==='Paper'){
                result='You lose.';
            }
        }else if(playerMove==='Paper'){
            if(computerMove==='Rock'){
                result='You win.';
            }else if(computerMove==='Scissors'){
                result='You lose.';
            }else if(computerMove==='Paper'){
                result='Tie.';
            }
        }else if(playerMove==='Scissors'){
            if(computerMove==='Rock'){
                result='You lose.';
            }else if(computerMove==='Scissors'){
                result='Tie.';
            }else if(computerMove==='Paper'){
                result='You win.';
            }
        }    
        
        if(result==='You win.'){
            score.Wins+=1;
        }else if(result==='You lose.'){
            score.Losses+=1;
        }else if(result==='Tie.'){
            score.Ties+=1;

        }
    

        localStorage.setItem('score', JSON.stringify(score));
        document.querySelector('.Result').innerHTML= result;
        document.querySelector('.moves').innerHTML=`You 
        <img class="moveicon"src="images/${playerMove}-emoji.png">
        <img class="moveicon"src="images/${computerMove}-emoji.png">
         Computer`;
        document.querySelector('.scoreResults').innerHTML=`Wins: ${score.Wins} .Losses:${score.Losses} .Ties: ${score.Ties}`;
    }   

    
function updateScore(){
    document.querySelector('.scoreResults').innerHTML=`Wins: ${score.Wins} .Losses:${score.Losses} .Ties: ${score.Ties}`;
}