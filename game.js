let userScore=0;
let compScore=0;
 
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
let user=document.querySelector("#user");
let comp=document.querySelector("#comp");


const genCompChoice= () =>
{
    const options=["stone","paper","scissor"];
    let randomidx=Math.floor(Math.random()*3);
    return options[randomidx];
};
const drawGame= () => {
    console.log("Game draw");
    msg.innerText=`Game draw!,you win!, your ${userChoice} and ${compChoice} are same`;
    msg.style.backgroundColor="blue";
};
const showWinner= (userWin,userChoice,compChoice)=> {
 if(userWin)
 {
    console.log("you win!");
    userScore++;
    user.innerText=userScore;
    msg.innerText=`you win!, your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="green";
 }
 else{
    console.log("you lose!");
    compScore++;
    comp.innerText=compScore;

    msg.innerText=`you lose!,${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor="red";
 }
};

const playGame=(userChoice)=>{
    console.log("userchoice=",userChoice);
    const compChoice=genCompChoice();
    console.log("compchoice=",compChoice);
    if(userChoice===compChoice)
    {
     drawGame();
    }
    else {
        let userWin=true;
         if(userChoice==="stone")
        {
            userWin=compChoice==="paper"?false : true;

    }
    else if(userChoice==="paper")
    {
    userWin=compChoice==="scissor"?false : true;
}
else if(userChoice==="scissor")
{
userWin=compChoice==="stone"?false : true;
}
showWinner(userWin,userChoice,compChoice);
}

};

 choices.forEach((choice) => {
    choice.addEventListener("click", () => {
     const userChoice=choice.getAttribute("id"); 
    playGame(userChoice); 
});
});

