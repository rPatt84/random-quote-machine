//DISPLAY FUCTIONALITY

//change colors;
let num = 1;

function colorAndIncrement(n) {
  if (num > 6) {
    num = 1;
    n = 1;
  }

  background(n);
  num++;
}

function background(n) {
  const bodyEle = document.getElementById("body");
  console.log(n);
  if (n > 1) {
    bodyEle.classList.remove(`background-color-${n - 1}`);
  } else if (n === 1) {
    bodyEle.classList.remove("background-color-6");
  }
  bodyEle.classList.add(`background-color-${n}`);
}

//Display and hide quote box and showcase
(function open() {
  document.getElementById("open-quote").addEventListener("click", function () {
    document.getElementById("showcase-box").style.display = "none";
    document.getElementById("body").classList.remove("background-white");
    colorAndIncrement(num);
  });
})();

(function close() {
  document.getElementById("close-quote").addEventListener("click", function () {
    document.getElementById("quote-box").classList.add("collapse");
    timeOut();
  });
})();

function timeOut() {
  setTimeout(function () {
    document.getElementById("body").classList.remove("animate-background");
    document.getElementById("body").classList.add("background-white");
    document.getElementById("showcase-box").style.display = "block";
  }, 500);
}

//QUOTE FUNCTIONALITY

//Quotes Array
const quoteArr = [
  [
    "I have no special talent. I am only passionately curious.",
    "Albert Einstein"
  ],
  ["All that we are is the result of what we have thought.", "Buddha"],
  ["Be yourself; everyone else is already taken.", "Oscar Wilde"],
  ["Stay hungry, stay foolish.", "Steve Jobs"],
  ["The greatest wealth is to live content with little.", "Plato"],
  [
    "I think it is possible for ordinary people to choose to be extraordinary.",
    "Elon Musk"
  ],
  [
    "Constantly seek criticism. A well thought out critique of what you're doing is as valuable as gold",
    "Elon Musk"
  ],
  [
    "The penalty good men pay for indifference to public affairs is to be ruled by evil men.",
    "Plato"
  ],
  ["Your Rational Mind is Your Greatest Asset", "Marcus Aurelius"],
  [
    "We all love ourselves more than other people, but care more about their opinion than our own.",
    "Marcus Aurelius"
  ]
];

//Previous quote array
let oldQuote = [];

//Retrive Quote function
function getQuote(arr) {
  let quoteNo, theQuote, quoteAuthor;
  quoteNo = Math.floor(Math.random() * quoteArr.length);
  theQuote = arr[quoteNo][0];
  quoteAuthor = arr[quoteNo][1];

  addToOldQuote(theQuote, quoteAuthor);
  addQuote(theQuote, quoteAuthor);
}

//save previous quote to array
function addToOldQuote(quote, author) {
  //target p element
  const theQuoteEle = document.getElementById("the-quote");
  const authorEle = document.getElementById("author");

  //taget global variable and save previous quote
  oldQuote.push([theQuoteEle.textContent, authorEle.textContent]);
}

function addQuote(theQuote, theAuthor) {
  //target p element
  const theQuoteEle = document.getElementById("the-quote");
  const authorEle = document.getElementById("author");

  //replace target elements with new quote
  theQuoteEle.textContent = theQuote;
  authorEle.textContent = theAuthor;
}

//event listener, retrive new quote and save previous run background color
(function newQuote() {
  document.getElementById("new-quote").addEventListener("click", function () {
    getQuote(quoteArr);
    colorAndIncrement(num);
  });
})();

//event listener, update with previous quote
(function getLastQuote() {
  document.getElementById("old-quote").addEventListener("click", function () {
    let oldQuoteArr = oldQuote;
    oldQuoteArr.length - 1 > -1
      ? addQuote(
          oldQuoteArr[oldQuote.length - 1][0],
          oldQuoteArr[oldQuote.length - 1][1]
        )
      : alert("No more old quotes me boy, you'll be needin a new one!");
    oldQuote.pop();
  });
})();


  



