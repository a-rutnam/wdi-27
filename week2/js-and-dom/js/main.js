console.log('hiya!');

console.log( document.getElementsByTagName('li') );

document.body.style.fontFamily = "Arial, sans-serif";

const nick = document.getElementById('nickname');
nick.innerHTML = "textchimp";

const favorites = document.getElementById('favorites');
favorites.innerHTML = "Toller, Labrador";

const home = document.getElementById('hometown');
home.innerHTML = "Sydderz";

const listItems = document.querySelectorAll('li');

for( let i = 0; i < listItems.length; i++ ){
  const li = listItems[i];
  li.className = 'listitem';
}

const img = document.createElement('img');
img.src = "http://fillmurray.com/500/500";

// document.body.appendChild( img );
// listItems[0].appendChild( img );

////////////////// Book List

var books = [
  {
    title: 'The Design of EveryDay Things',
    author: 'Don Norman',
    imageURL: 'http://fillmurray.com/200/200',
    alreadyRead: false
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    imageURL: 'http://fillmurray.com/250/250',
    alreadyRead: true
  }
];

// Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.
// Bonus: Use a ul and li to display the books.
// Bonus: add a property to each book with the URL of the book cover, and add an img element for each book on the page.
// Bonus: Change the style of the book depending on whether you have read it or not.

const bookList = document.getElementById('bookList');

const ul = document.createElement('ul');

for( let i = 0; i < books.length; i++ ){
  const book = books[i];

  const liTag = document.createElement('li');
  liTag.innerHTML = `
   Title: ${ book.title }<br>
   Author: ${ book.author }
  `;

  const img = document.createElement('img');
  img.src = book.imageURL;
  liTag.appendChild( img ); // add image to the end of our li tag

  if( book.alreadyRead ){
    // this will cause the book text to appear red if the book has
    // been read (geddit?)
    liTag.className = 'listitem';
  }

  ul.appendChild( liTag ); // add the li element to our ul element
}

bookList.appendChild( ul ); // add the ul to the page, into div#bookList



///////////////////////////////////////////////////////////////////
// Event handlers in JS

const billImg = document.getElementById('bigBill');

const hiBill = function( event ){
  console.log('Hi from your friend Bill Murray!');
  console.log('event data: ', event);
};

// add an event listener to the <img id="bigBill"> tag,
// to run our hiBill() function whenever it is clicked
billImg.addEventListener( 'click', hiBill );

// add an event listener to the same img tag, to
// run an anonymous function which prints the mouse
// X position, whenever the mouse moves above the image
billImg.addEventListener( 'mousemove', function( ev ){
  console.log('anonymous event handler: ', ev.offsetX);
});
