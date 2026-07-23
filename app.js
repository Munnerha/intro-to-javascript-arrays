// as a reminder, movies is ['Barbie', 'Arrival', 'Get Out', 'Coco']
const movies = ['Barbie', 'Arrival', 'Get Out', 'Coco'];

for (let idx = 0; idx < movies.length; idx++) {
  console.log(movies[idx]);
}

for (let idx = 0; idx < movies.length; idx++) {
  console.log(`${idx + 1}. ${movies[idx]}`);
}
 console.log(movies.length); 

 for (let movie of movies) {
  console.log(movie);
}

function printMsg(movie) {
  console.log(movie);
}

movies.forEach(printMsg); 


movies.forEach(function (movie) {
    console.log(`this is the ${movie}`);
});

movies.forEach(printMsg);

console.log('------------');

// as a reminder, movies is ['Barbie', 'Arrival', 'Get Out', 'Coco']

movies.forEach((movie) => {
  console.log(movie)
});

console.log('=============');

movies.forEach((movie, index) => {
  if(index === 2) console.log("This is the third movie:");
  console.log(movie);
});

console.log('+++++++++');

// as a reminder, movies is ['Barbie', 'Arrival', 'Get Out', 'Coco']
let movieString = movies.join();
// movieString is 'Barbie,Arrival,Get Out,Coco'
console.log(movies.join());

movieString = movies.join(' -- ');
// movieString is 'Barbie -- Arrival -- Get Out -- Coco'

console.log(movies.join(' -- '));

const books = ['The Shining', 'Spiderman', 'The Great Gatsby', 'The Catcher in the Rye'];

console.log(books[1]);

console.log('gggggggg');

books.forEach(function (book) {
  console.log(book);
});

