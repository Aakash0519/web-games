function load_game() {
	var random=Math.floor(Math.random()*10);
	var turns=1;
    var colors=["blue","cyan","gold","gray","green","magenta","orange","red","white","yellow"];
    
	while(1) {
        var guess=prompt("I am thinking of one of these colors:\nblue,cyan,gold,gray,green,magenta,orange,red,white,yellow\nWhat color I am thinking of?");
        
		if(colors.indexOf(guess)==-1)
			alert("Sorry, I don't recognize your color\nPlease try again.");
		else if(guess>colors[random])
			alert("Sorry your guess is not correct!\nHint: Your color is alphabetically higher than mine.\nPlease try again.");
		else if(guess<colors[random])
			alert("Sorry your guess is not correct!\nHint: Your color is alphabetically lower than mine.\nPlease try again.");
		else {
			myBody=document.getElementsByTagName("body")[0];
			myBody.style.background=guess;
			alert("Congratulations! You have guessed the color!\nIt took you " +turns+ " turns to guess the color!\nYou can see the color in the background.");
		    break;
		}
                    
        turns++;
	}
}