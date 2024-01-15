let link = document.getElementsByClassName(".gaming");

numOfWon = 0;
numOfLost = 0;

for(let i = 1; i <= 5; i++){
    let num = parseInt(prompt("Enter a number from 1 to 5: "));

    let randomN = Math.floor(Math.random() *5) +1;
    
    if(num==randomN){
        document.write("You have won </br>");
        numOfWon++;
    }
    else
    {
        document.write("You have failed.</br> The right number is " + ' ' +randomN + "</br>" );
        numOfLost++;
    }
}
document.write(" <p>Total Number of won = " + ' ' + numOfWon + "</br");
document.write(" <p>Total Number of lost = " + ' ' + numOfLost + "</br");
