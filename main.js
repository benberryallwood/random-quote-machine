var quotes = [
      {quote: "The best programs are the ones written when the programmer is supposed to be working on something else.", author: "Melinda Varian"},
      {quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.", author: "Marilyn Monroe"},
      {quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: "Albert Einstein"},
      {quote: "So many books, so little time.", author: "Frank Zappa"}
]

var quoteNum;
var newQuote;
var newAuthor;

function getQuote() {
    quoteNum = Math.floor(Math.random()*quotes.length);
    newQuote = quotes[quoteNum].quote;
    newAuthor = quotes[quoteNum].author;
    $("#text").text(newQuote);
    $("#author").text("- " + newAuthor);
    $("#tweet-quote").attr("href", "http://twitter.com/intent/tweet?text=" + encodeURIComponent('"' + newQuote + '" -' + newAuthor));
}

$(document).ready(function(){
    getQuote();
    $("#new-quote").on("click", getQuote);
});
