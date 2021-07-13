var quotes = {
  0: {
    quote: "Looking at code you wrote more than two weeks ago is like looking at code you are seeing for the first time.",
    author: "Dan Hurvitz"
  },
  1: {
    quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    author: "Aristotle"
  },
  2: {
    quote: "The value of a prototype is in the education it gives you, not in the code itself.",
    author: "Alan Cooper"
  },
  3: {
    quote: "Optimism is an occupational hazard of programming. Testing is the treatment.",
    author: "Kent Beck"
  },
  4: {
    quote: "Walking on water and developing software from a specification are easy if both are frozen.",
    author: "Edward V. Berard"
  },
  5: {
    quote: "Act in haste and repent at leisure. Code too soon and debug forever.",
    author: "Dr. Raymond Kennington"
  },
  6: {
    quote: "Programming without an overall architecture or design in mind is like exploring a cave with only a flashlight: You don't know where you've been, you don't know where you're going, and you don't know quite where you are.",
    author: "Danny Thorpe"
  },
  7: {
    quote: "To teach is to learn twice.",
    author: "Joseph Joubert"
  },
  8: {
    quote: "It's hard enough to find an error in your code when you're looking for it. It's even harder when you've assumed your code is error-free.",
    author: "Steve McConnell"
  },
  9: {
    quote: "Doing more things faster is no substitute for doing the right things.",
    author: "Stephen Covey"
  },
  10: {
    quote: "Unless in communicating with a computer one says exactly what one means, trouble is bound to result.",
    author: "Alan Turing"
  },
  11: {
    quote: "The most exciting phrase to hear in science - the one that heralds new discoveries - is not \"Eureka!\" but \"That's funny...\".",
    author: "Isaac Asimov"
  },
  12: {
    quote: "The tools we use have a profound (and devious!) influence on our thinking habits, and, therefore, on our thinking abilities.",
    author: "Edsger Dijkstra"
  },
  13: {
    quote: "Planning is everything. Plans are nothing.",
    author: "Helmuth von Moltke"
  },
  14: {
    quote: "Tetris came along early and had a very important role in breaking down ordinary people's inhibitions in front of computers, which were scary objects to non-professionals used to pen and paper. But the fact that something so simple and beautiful could appear on screen destroyed that barrier.",
    author: "Tetris creator Alexey Pajitnov"
  },
  15: {
    quote: "Any intelligent fool can make things bigger and more complex. It takes a touch of genius - and a lot of courage - to move in the opposite direction.",
    author: "Ernst Schumacher"
  },
  16: {
    quote: "If you're any good at all, you know you can be better.",
    author: "Lindsay Buckingham"
  },
  17: {
    quote: "People worry that computers will get too smart and take over the world. But the real problem is that computers are too stupid and they've already taken over the world.",
    author: "Pedro Domingos"
  },
  18: {
    quote: "You can have data without information, but you cannot have information without data.",
    author: "Daniel Keys Moran"
  },
  19: {
    quote: "If you want to truly understand something, try to change it.",
    author: "Kurt Lewin"
  },
  20: {
    quote: "The joy of coding Python should be in seeing short, concise, readable classes that express a lot of action in a small amount of clear code - not in reams of trivial code that bores the reader to death.",
    author: "Python creator Guido van Rossum"
  },
  21: {
    quote: "Programming is the only job I can think of where I get to be both an engineer and an artist. There's an incredible, rigorous, technical element to it, which I like because you have to do very precise thinking. On the other hand, it has a wildly creative side where the boundaries of imagination are the only real limitation.",
    author: "Andy Hertzfeld"
  },
  22: {
    quote: "The mathematician's patterns, like those of the painter's or the poet's, the ideas, like the colours or words, must fit together in a harmonious way. There is no permanent place in this world for ugly mathematics.",
    author: "Godfrey Harold Hardy from \"A Mathematician's Apology\""
  },
  23: {
    quote: "To achieve great things, two things are needed: a plan, and not quite enough time.",
    author: "Leonard Bernstein"
  },
  24: {
    quote: "We shall do a much better programming job, provided we approach the task with a full appreciation of its tremendous difficulty, provided that we respect the intrinsic limitations of the human mind and approach the task as very humble programmers.",
    author: "Alan Turing"
  },
  25: {
    quote: "The first 90% of the code accounts for the first 90% of the development time. The remaining 10% of the code accounts for the other 90% of the development time.",
    author: "Cargill's Rule"
  },
  26: {
    quote: "One must learn by doing the thing; for though you think you know it, you have no certainty, until you try.",
    author: "Sophocles"
  },
  27: {
    quote: "Creativity is intelligence having fun.",
    author: "Albert Einstein"
  },
  28: {
    quote: "Weeks of coding can save you hours of planning.",
    author: "An unknown developer who learned the value of planning the hard way"
  },
  29: {
    quote: "Less than 10% of the code has to do with the ostensible purpose of the system. The rest deals with input-output, data validation, data structure maintenance, and other housekeeping.",
    author: "Mary Shaw"
  },
  30: {
    quote: "Data is not information. Information is not knowledge. Knowledge is not understanding. Understanding is not wisdom.",
    author: "Gary Schubert & Cliff Stoll"
  },
  31: {
    quote: "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code.",
    author: "Dan Salomon"
  },
  32: {
    quote: "Computer programming is an art because it applies accumulated knowledge to the world, because it requires skill and ingenuity, and especially because it produces objects of beauty. Programmers who subconsciously view themselves as artists will enjoy what they do and will do it better.",
    author: "Donald Knuth"
  },
  33: {
    quote: "Programming isn't about what you know. It's about what you can figure out.",
    author: "Chris Pine"
  },
  34: {
    quote: "Privacy is not for the passive.",
    author: "Jeffrey Rosen"
  },
  35: {
    quote: "The only truly secure system is one that is powered off, cast in a block of concrete and sealed in a lead-lined room with armed guards.",
    author: "Gene Spafford"
  },
  36: {
    quote: "You can pipe anything to anything else, and usually it'll do something. With most of the standard Linux tools, it'll even do what you expect.",
    author: "Scott Simpson"
  },
  37: {
    quote: "The Domain Name Server (DNS) is the Achilles heel of the Web. The important thing is that it's managed responsibly.",
    author: "Tim Berners-Lee, inventor of the World Wide Web"
  },
  38: {
    quote: "People tend to overestimate what can be done in one year and to underestimate what can be done in five or ten years.",
    author: "JCR Licklider, co-creator of the internet"
  },
  39: {
    quote: "Human beings are not accustomed to being perfect, and few areas of human activity demand it. Adjusting to the requirement for perfection is, I think, the most difficult part of learning to program.",
    author: "Fred Brooks"
  },
  40: {
    quote: "As soon as we started programming, we found to our surprise that it wasn't as easy to get programs right as we had thought. Debugging had to be discovered. I can remember the exact instant when I realized that a large part of my life from then on was going to be spent in finding mistakes in my own programs.",
    author: "Maurice Wilkes"
  },
  41: {
    quote: "It's not at all important to get it right the first time. It's vitally important to get it right the last time.",
    author: "Andrew Hunt and David Thomas, in the classic book The Pragmatic Programmer"
  },
  42: {
    quote: "The golden rule of level design - finish your first level last.",
    author: "John Romero (co-creator of DOOM)"
  },
  43: {
    quote: "Security is always excessive until it's not enough.",
    author: "Robbie Sinclair"
  },
  44: {
    quote: "One of my most productive days was throwing away 1,000 lines of code.",
    author: "Ken Thompson (Co-creator of Unix and Go)"
  },
  45: {
    quote: "Any app that can be written in JavaScript will eventually be written in JavaScript.",
    author: "Atwood's Law"
  },
  46: {
    quote: "We can only see a short distance ahead, but we can see plenty there that needs to be done.",
    author: "Alan Turing"
  },
  47: {
    quote: "A user interface is like a joke. If you have to explain it, it's not that good.",
    author: "Martin LeBlanc"
  },
  48: {
    quote: "I never guess. It is a capital mistake to theorize before one has data. Insensibly one begins to twist facts to suit theories, instead of theories to suit facts.",
    author: "Sir Arthur Conan Doyle"
  },
  49: {
    quote: "By visualizing information, we turn it into a landscape that you can explore with your eyes. A sort of information map. And when you're lost in information, an information map is kind of useful.",
    author: "David McCandless"
  },
  50: {
    quote: "A secure system is one that does what it is supposed to do, and nothing more.",
    author: "John B. Ippolito"
  },
  51: {
    quote: "You can have data without information. But you cannot have information without data.",
    author: "Daniel Keys Moran"
  },
  52: {
    quote: "The fastest algorithm can frequently be replaced by one that is almost as fast and much easier to understand.",
    author: "Douglas W. Jones"
  },
  53: {
    quote: "Every project is an opportunity to learn, to figure out problems and challenges, to invent and reinvent.",
    author: "David Rockwell, architect and Tony Award-winning musical set designer"
  },
  54: {
    quote: "The best programs are the ones written when the programmer is supposed to be working on something else.",
    author: "Melinda Varian, Virtual Machine pioneer"
  },
  55: {
    quote: "Get in over your head as often and as joyfully as possible.",
    author: "Alexander Isley, Designer and American Institute of Graphic Arts medalist"
  }
};

var quoteNum;
var newQuote;
var newAuthor;

function getQuote() {
    quoteNum = Math.floor(Math.random()*Object.keys(quotes).length);
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
