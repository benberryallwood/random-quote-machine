# Random Quote Machine

This is the first project for the *Front End Development Libraries Certification* provided by [freeCodeCamp](https://www.freecodecamp.org).

I chose to complete it using HTML, CSS, Bootstrap and jQuery and have published the gh-pages branch of this repository on [GitHub Pages](https://benberryallwood.github.io/random-quote-machine).
This is one of the projects I have chosen to include on [my portfolio site](https://benberryallwood.github.io).

## freeCodeCamp

freeCodeCamp offer many free online certifications, with a vast amount of resources to learn from as well as very regular articles.
Incidentally, I would also highly recommend Quincy Larson's mailing list; he sends five links to articles, videos or similar each week which are very interesting and useful (to me at least).

## About This Project

Here are the [details about the aims](https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-random-quote-machine) of this project.
The course that this project is part of covers:

- Bootstrap
- jQuery
- SASS
- React
- Redux
- React and Redux together.

Of these, I used Bootstrap and jQuery.
The styling is quite basic, so I used Bootstrap for this and the simple layout.
jQuery helped keep the javascript very simple and easy to read.

The quotes I used are the "Quote[s] of the Week" from Quincy Larson's mailing list.
They are programming themed, motivational, thought-provoking and very often amusing.
In order to get the quotes, I wrote a [Python script](https://github.com/benberryallwood/random-quote-machine/blob/883d454f96171eba1476dfb260faf06330d4cdc8/get-quotes-from-emails-without-details.py) (with my email login details removed) which retrieves the emails that contain these quotes and saves the quotes into a [JSON file](https://github.com/benberryallwood/random-quote-machine/blob/883d454f96171eba1476dfb260faf06330d4cdc8/quotes.json).
I then simply copied it into my javascript file and used [Vim macros](https://www.tutorialspoint.com/vim/vim_macros.htm) in order to format it into a javascript object.

I will note that [line 32 of index.html](https://github.com/benberryallwood/random-quote-machine/blob/883d454f96171eba1476dfb260faf06330d4cdc8/index.html#L32) contains the freeCodeCamp testing script.
My project has passed the tests included and it is now commented out for aesthetic reasons.

Finally, the colours used are taken from my favourite colourscheme for Vim: [gruvbox](https://github.com/morhetz/gruvbox).
