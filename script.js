//opening text
let greeting = 'Hey here is for you special quote from tv show "FRIENDS" ';
console.log(`${greeting}!`);

// generating random quote
let randomQuote = Math.floor(Math.random() * 8);

// setting quote at first to an empty string
let friendsQuote = '';

// giving random quotes to generate
switch (randomQuote) {
  case 0:
    friendsQuote = 'HOW YOU DOIN?';
    break;
  case 1:
    friendsQuote = 'WE WHERE ON A BREAK!';
    break;
  case 2:
    friendsQuote = 'THEY DONT KNOW THAT WE KNOW THEY KNOW WE KNOW!';
    break;
  case 3:
    friendsQuote = "YOU'VE BEEN BAMBOOZELED!";
    break;
  case 4:
    friendsQuote = 'AAAAA UNAGI!';
    break;
  case 5:
    friendsQuote = 'PIVOT! PIVOT! PIVOT!';
    break;
  case 6:
    friendsQuote = 'OH MY GOD!';
    break;
  case 7:
    friendsQuote = 'SMELLY CAT, SMELLY CAT WHAT ARE THEY FEEDING YOU?';
    break;
  case 8:
    friendsQuote = 'SHE IS HIS LOBSTER!';
    break;
}

// // display your random quote
console.log(`Can you gues who say? \n${friendsQuote}`);
