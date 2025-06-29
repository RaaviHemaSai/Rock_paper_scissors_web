let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const result_div = document.querySelector(".result");
const rock_img = document.getElementById("r");
const paper_img = document.getElementById("p");
const scissors_img = document.getElementById("s");

const list1 = ['r', 'p', 's'];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * list1.length);
    console.log("Computer random index:", randomIndex);
    return list1[randomIndex];
}
function full_form(choice){
    if (choice=='r'){
        return 'rock';
    }
     if (choice=='p'){
        return 'paper';
    }
     if (choice=='s'){
        return 'scissors';
    }
}
function win(userChoice , computerChoice){
    userScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    result_div.innerText = `You chose ${full_form(userChoice)}, Computer chose ${full_form(computerChoice)} user wins `;
};
function lose(userChoice , computerChoice){
    computerScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    result_div.innerText = `You chose ${full_form(userChoice)}(user), Computer chose ${full_form(computerChoice)}(comp) computer wins `;
};
function draw(userChoice , computerChoice){
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    result_div.innerText = `You chose ${full_form(userChoice)}, Computer chose ${full_form(computerChoice)} it's draw `;
};

    

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch(userChoice+computerChoice){
        case 'pr':
        case 'rs':
        case 'sp':
            win(userChoice , computerChoice);
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose(userChoice , computerChoice);
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice , computerChoice);
            break;
        }

    
    
}

function main() {
    rock_img.addEventListener('click', function () {
        game('r');
    });
    paper_img.addEventListener('click', function () {
        game('p');
    });
    scissors_img.addEventListener('click', function () {
        game('s');
    });
}

main();
