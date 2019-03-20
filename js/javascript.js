var userScore = 0;
var compScore = 0;
var userChoice;
var compChoice;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const result_p = document.getElementById("res");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getCompChoice(){
	var compChoice = Math.floor(Math.random()*3);
	var choices=["r","p","s"];
	return choices[compChoice];
}

function convertWord(letter){
	switch (letter) {
		case "r": {return "Piatra"; break;}
		case "p": {return "Hartia"; break;}
		case "s": {return "Foarfeca"; break;}
		default:break;
	}
}

function win(userChoice,compChoice){
	userScore++;
	userScore_span.innerHTML = userScore;
	result_p.innerHTML = convertWord(userChoice) + " bate " + convertWord(compChoice) + ".<br>Ai castigat!";
}

function lose(userChoice,compChoice){
	compScore++;
	compScore_span.innerHTML = compScore;
	result_p.innerHTML = convertWord(compChoice) + " bate " + convertWord(userChoice) + ".<br>Ai pierdut!";
}

function draw(){
	result_p.innerHTML = "Egalitate!" + "<br>" + "Incercati din nou!";
}
function game(userChoice){
	const compChoice = getCompChoice();
	switch (userChoice + compChoice) {
		case "rs":
		case "pr":
		case "sp":
			win(userChoice,compChoice);
			break;
		case "rp":
		case "ps":
		case "sr":
			lose(userChoice,compChoice);
			break;
		case "rr":
		case "pp":
		case "ss":
			draw();
			break;
		default:
			break;
	}
}

function main(){
	rock_div.addEventListener("click",function() {
		game("r");
	});
	paper_div.addEventListener("click",function() {
		game("p");
	});
	scissors_div.addEventListener("click",function() {
		game("s");
	});
}

main();
