/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/
//input my and my friends score...
var myScore = 85;
var friendScore = 40;

// Implement conditions for offers
if (myScore >= 80) {
    console.log('Hurrah!');
    if (friendScore >= 80) {
        console.log('Dude, let\'s go for lunch.');
    } 
    else if (friendScore >= 60 && friendScore <= 79) {
        console.log('Good luck for next time.');
    } 
    else if (friendScore >= 40 && friendScore <= 59) {
        console.log('We are still friends, but I might ignore you.');
    } 
    else {
        console.log('You are not my friend; I will block you, dude.');
    }
} 
else {
    console.log('I am going home to sleep and act sad.');
}
