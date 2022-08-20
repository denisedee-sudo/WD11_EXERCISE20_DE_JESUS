let determineWinner = function(){
    let userInput = document.querySelector("#userPlay").value;
    userInput = userInput.toLowerCase();
    getComputerChoice = () => {
        let rps = ["rock", "paper", "scissors"]
        let rNum = Math.floor(Math.random()*3)
        console.log("The computer chose " + rps[rNum])
        return rps[rNum];
    }
    let computerChoice = getComputerChoice()
    document.getElementById("computerPlay").innerHTML = computerChoice;
    if(userInput === "rock" || userInput === "paper" || userInput === "scissors"){
        console.log("You chose "+ userInput)
        document.getElementById("uChoice").innerHTML = "You chose "+ userInput;
        if(userInput === computerChoice){
            console.log("It's a tie!")
            document.getElementById("winner").innerHTML = "It's a tie!";
        } else if (userInput === "rock"){
            if(computerChoice === "paper"){
                console.log("The computer wins!")
                document.getElementById("winner").innerHTML = "the Computer";
            } else{
                console.log("You win!")
                document.getElementById("winner").innerHTML = "You";
            }
        } else if (userInput === "paper"){
            if(computerChoice === "scissors"){
                console.log("The computer wins!")
                document.getElementById("winner").innerHTML = "the Computer";
            } else{
                console.log("You win!")
                document.getElementById("winner").innerHTML = "You";
            }
        } else{
            if(computerChoice === "rock"){
                console.log("The computer wins!")
                document.getElementById("winner").innerHTML = "the Computer";
            } else{
                console.log("You win!")
                document.getElementById("winner").innerHTML = "You";
            }
        }
    }else{
        console.log("Error. You wrote: "+ userInput + "Please choose: rock, paper or scissors")
        document.getElementById("uChoice").innerHTML = `Error. You wrote: "${userInput}". Please choose: rock, paper or scissors`;
        }

        document.getElementById('cImage').src = "Computer/" + computerChoice +".png";
        document.getElementById('uImage').src = "User/" + userInput + ".png";
    }