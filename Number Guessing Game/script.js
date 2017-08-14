function load_game() {
	var random=Math.floor(Math.random()*100)+1;
    var turns=1;
    
	while(1) {
        var guess=parseInt(prompt("Please guess a no. between 1 to 100"));
        
		if(isNaN(guess) || guess<1 || guess>100)
			alert("Please enter a correct no.");
		else if(guess>random)
			alert("Too large!");
		else if(guess<random)
			alert("Too small!");
		else {
			alert("You got it right!\nIt took "+ turns +" turns for you to guess "+ random);
			break;
        }
        
		turns++;
	}
}