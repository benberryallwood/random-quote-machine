var quotes = []

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
