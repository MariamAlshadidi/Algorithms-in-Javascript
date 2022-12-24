/*                   
                        _____  Palindrome Algorithm: _____

 Def: characters are reversed that return the same result as the original numbers or characters

Example:  NITIN, 123454321, madam, etc. Suppose we have a word, madam. When we read the word madam from the forward and the backward end,
 it returns the same string. Therefore, we can refer to the string or number as the Palindrome.

*/

var word = 'racecar';
var letters = []; // this is our stack
var rword = '';


// solution 1

for (let i = 0; i < word.length ; i++){
    letters.push(word[i]);  // r a c e c a r
}

for (let i = 0; i < word.length ; i++){
    rword  += letters.pop();  // r   ra   rac race  racec   raceca   racecar
}

if (rword === word) {
    console.log(word + " is a palindrome.");
 }
 else {
    console.log(word + " is not a palindrome.");
 }
 

 /////////////////////////////

 // solution 2
const len = word.length;

// loop through half of the string
for (let i = 0; i < len / 2; i++) {

    if (word[i] !== word[len - 1 - i]) {
         console.log('It is not a palindrome');
    }
}

