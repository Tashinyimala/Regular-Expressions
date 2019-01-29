let log = console.log;

let name = "Tashi Nyima";
let myRegex = /Tashi/;
let result = myRegex.test(name);   

let petString = "Tashi has a lovely Dog named Bingo";
let peRegex = /dog|cat|piglet/i; // i -> ingnore case
let result1 = peRegex.test(petString);

// .match method
log("Tashi Nyima".match(/Tashi/));

let myString = "regular expressions";
let myRegex1 = /Regular/i;
log(myString.match(myRegex1));

// Find More Than the First Match
let myRepeatStrr  = "Repeat Repeat Repeat";
let myRepeatRegex = /repeat/ig; // g -> more than one match
log(myRepeatStrr.match(myRepeatRegex)); 

// Wildcard Period
let tashiString = "Tashi Nyima";
let tashiRegex  = /tash./i; // . -> wildcard period
log(tashiString.match(tashiRegex));

// Match Single Character with Multiple Possibilities
let loeStr = "Loe";
let lveStr = "lve";
let lmeStr = "Lme";
let lieStr = "lie";
let leRegex = /l[ovm]e/gi;

log(loeStr.match(leRegex));
log(lveStr.match(leRegex));
log(lmeStr.match(leRegex));
log(lieStr.match(leRegex));

// Match Letters of the Alphabet
let dogStr = "dog";
let bogStr = "Bog";
let logStr = "log";
let ogRegex = /[a-l]og/gi;
log(dogStr.match(ogRegex));
log(bogStr.match(ogRegex));
log(logStr.match(ogRegex));

// Match Numbers and Letters of the Alphabet
let detailStr   = "tashinyima1235566669";
let detailRegex = /[a-z0-9]/gi;
log(detailStr.match(detailRegex));

// Negated character set ^
let negateVowel = "FOr the love Javascript ES6 👍";
let negateRegex = /[^aeiou0-9]/gi; //not vowels and number
log(negateVowel.match(negateRegex));

// +  & * characters to match more than one character
let ssStr = "Mississippi";
let regexPlux = /s+/gi;
let regexstar = /s*/gi;

log(ssStr.match(regexPlux));
log(ssStr.match(regexstar));

// Lazy Matching
let titanic = "Titanic";
let lazyRegex = /t[a-z]*?i/i; // ? for lazy matching
let notLazyRegex = /t[a-z]*i/i;
log(titanic.match(notLazyRegex)); // Titani
log(titanic.match(lazyRegex)); // Ti

// Match Beginning String Patterns
let firstString = "Javascript is the best programming language👍";
let firstRegex  = /^Javascript/;
log(firstString.match(firstRegex));

// Match Ending String Patterns
let endString = "Best programming language is Javascript";
let endRegex  = /Javascript$/;
log(endString.match(endRegex));

// Match All Letters and Numbers
let longHand  = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "47";
let varNames = "important_var";
log(longHand.test(numbers));
log(shortHand.test(numbers));
log(longHand.test(varNames));
log(shortHand.test(varNames));

// Match Everything But Letters and Numbers
let shortHand1 = /\W/; // same as [^A-Za-z0-9_]
let numbers1 = "42%";
let sentence1= "Coding!"
log(numbers1.match(shortHand1)); // %
log(sentence1.match(shortHand1)); // !

// Match All Numbers
let numString = "Javascript book shot £29.99";
let numRegex = /\d/g; //[0-9]
log(numString.match(numRegex)); // ["29", "99"]

// Match All Non-Numbers
let username = "JackOfAllTrades";
let nonNumRegex = /\D/gi;
log(username.match(nonNumRegex));

// Match Whitespace
let whiteSpace = "Whitespace. Whitespace everywhere!";
let spaceRegex = /\s/g;
log(whiteSpace.match(spaceRegex)); // [" ", " "]

// Match Non-Whitespace Characters
let nonWhiteSpace = /\S/g;
log(whiteSpace.match(nonWhiteSpace));

//Specify Upper and Lower Number of Matches
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/;
log(ohStr.match(ohRegex));

// Specify Only the Lower Number of Matches
let A4 = "haaaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3,}h/;
log(multipleA.test(A4));
log(multipleA.test(A2));
log(multipleA.test(A100));

//Specify Exact Number of Matches
let fourAs = /ha{4}h/; // Exact 4 A
log(fourAs.test(A4));

// Positive and Negative Lookahead
    // (?=) Positive Lookhead - make sure the element in the search pattern is there, but won't actually match it.
    // (?!) negative lookahead will look to make sure the element in the search pattern is not there
    let sampleWord = "astronaut";
    let pwRegex = /(?=\w{5,})(?=\D*\d{2})/; // match passwords that are greater than 5 characters long and have two consecutive digits.
    log(pwRegex.test(sampleWord));

// Use Capture Groups to Search and Replace
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
log(wrongText.replace(silverRegex, "Grey"));

// Remove Whitespace from Start and End
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g;
log(hello.replace(wsRegex, '')); // Hello, World!
