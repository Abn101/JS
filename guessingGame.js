const secretNumber = Math.floor(Math.random() * 10) + 1;
let guess = 0;
let attempts = 0;
while(guess!==secretNumber)
{
    guess = Math.floor(Math.random() * 10) + 1;
    attempts++;
}
if(guess === secretNumber)
{
    console.log("You have guessd the number in ",attempts," attempts and the number is",guess);
}