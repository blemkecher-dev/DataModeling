console.log("PART_1");
var books = [
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    msrp: 24.99,
    genre: "fantasy",
    numPages: 309,
    description: "A young wizard discovers his destiny.",
  },
  {
    title: "Romeo and Juliet",
    author: "William Shakespeare",
    msrp: 9.99,
    genre: "tragedy",
    numPages: 120,
    description: "Two young lovers in Verona.",
  },
  {
    title: "Structure and Interpretation of Computer Programs",
    author: "Gerald Jay Sussman, Hal Abelson",
    msrp: 45,
    genre: "technical",
    numPages: 657,
    description: "Classic CS textbook.",
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    msrp: 14.99,
    genre: "fiction",
    numPages: 180,
    description: "American dream in the Jazz Age.",
  },
  {
    title: "1984",
    author: "George Orwell",
    msrp: 13.99,
    genre: "dystopian",
    numPages: 328,
    description: "Totalitarianism and surveillance.",
  },
];
console.log("___________________________________________exercise 1.1");

function makeBook(title, author, msrp, genre, numPages, description) {
  return {
    title: title,
    author: author,
    msrp: msrp,
    genre: genre,
    numPages: numPages,
    description: description,
  };
}
console.log(
  makeBook(
    "1984",
    "George Orwell",
    13.99,
    "dystopian",
    328,
    "Totalitarianism and surveillance.",
  ),
);

console.log("___________________________________________exercise 1.2");

let book_1 = makeBook(
  "Harry Potter and the Sorcerer's Stone",
  "J.K. Rowling",
  24.99,
  "fantasy",
  309,
  "A young wizard discovers his destiny.",
);
let book_2 = makeBook(
  "Romeo and Juliet",
  "William Shakespeare",
  9.99,
  "tragedy",
  120,
  "Two young lovers in Verona.",
);
let book_3 = makeBook(
  "Structure and Interpretation of Computer Programs",
  "Gerald Jay Sussman, Hal Abelson",
  45,
  "technical",
  657,
  "Classic CS textbook.",
);
let book_4 = makeBook(
  "The Great Gatsby",
  "F. Scott Fitzgerald",
  14.99,
  "fiction",
  180,
  "American dream in the Jazz Age.",
);
let book_5 = makeBook(
  "1984",
  "George Orwell",
  13.99,
  "dystopian",
  328,
  "Totalitarianism and surveillance.",
);
let newBooks = [book_1, book_2, book_3, book_4, book_5];
console.log(newBooks);

console.log("___________________________________________exercise 1.3");

function displayBook(book) {
  return book.title + " " + book.author + " " + book.genre + " " + book.msrp;
}
//console.log (displayBook(book_1))

console.log("___________________________________________exercise 1.4");

function updateBookGenre(newBooks, newGenre) {
  newBooks.genre = newGenre;
  return newBooks;
}
console.log(updateBookGenre(book_1, "comedy"));

console.log("___________________________________________exercise 1.5");

function getBookTitle(newBook) {
  return newBook.title;
}
console.log(getBookTitle(book_1));

console.log("___________________________________________exercise 1.6");

function BookPrice(newBook) {
  return newBook.msrp;
}
console.log(BookPrice(book_1));

console.log("-------------------------------------------part2 exercise 1.1");

function displayBookList(books) {
  let display = "";
  for (let i = 1; i < books.length; i++) {
    display = display + i + "." + displayBook(books[i]) + "\n";
  }
  return display;
}
console.log(displayBookList(newBooks));

console.log("-------------------------------------------part2 exercise 1.2");

function addBook(books, book) {
  books.push(book);
  return books;
}
console.log(addBook(books, "the prince"));

console.log("-------------------------------------------part2 exercise 1.3");

function removeBook(books, title) {
  for (let i = 0; i < books.length; i++) {
    if (books[i].title === title) {
      books.splice(i, 1);
      return "removed " + title;
    } else {
      return "Could not find " + title;
    }
  }
}
console.log(removeBook(books, "dune"));

console.log("-------------------------------------------part2 exercise 1.4");

function findMostExpensiveBook(books) {
  let expensive = books[0];
  for (let i = 1; i < books.length; i++) {
    if (books[i].msrp > expensive.msrp) {
      expensive = books[i];
    }
  }
  return expensive.title + " " + expensive.msrp;
}
console.log(findMostExpensiveBook(books));

function makeMovie(
  title,
  director,
  duration,
  releaseDate,
  cast,
  studio,
  synopsis,
  rating,
) {
  return {
    title: title,
    director: director,
    duration: duration,
    releaseDate: releaseDate,
    cast: cast,
    studio: studio,
    synopsis: synopsis,
    rating: rating,
  };
}
console.log(
  makeMovie(
    "Inception",
    "Christopher Nolan",
    148,
    "2010",
    "Leonardo DiCaprio, Ellen Page",
    "Warner Bros.",
    "Dreams within dreams.",
    8.8,
  ),
);

console.log("_____________________________exercise 2.2");
let movie_1 = makeMovie(
  "Inception",
  "Christopher Nolan",
  148,
  "2010",
  "Leonardo DiCaprio, Ellen Page",
  "Warner Bros.",
  "Dreams within dreams.",
  8.8,
);
let movie_2 = makeMovie(
  "The Shawshank Redemption",
  "Frank Darabont",
  142,
  1994,
  "Tim Robbins, Morgan Freeman",
  "Castle Rock",
  "Hope in prison.",
  9.3,
);
let movie_3 = makeMovie(
  "Parasite",
  "Boonj Joon HO",
  132,
  "2019",
  "Song Kang-Ho,Lee Sun-Kyun",
  "CjEntertainment",
  "Class and greed",
  8.6,
);
let movie_4 = makeMovie(
  "SpiritedAway",
  "HayaoMiyazaki",
  125,
  "2001",
  "Rumi Hiragi MiyuIrino",
  "StudioGhibli",
  "A girl in the spirit world",
  8.6,
);
let movie_5 = makeMovie(
  "TheDarkKnight",
  "Christopher Nolan",
  152,
  "2008",
  "Christian Bale, Heath Ledger",
  "Warner Bros",
  "Batman vs Joker",
  9.0,
);
let newmovies = [movie_1, movie_2, movie_3, movie_4, movie_5];
console.log(newmovies);
console.log("_____________________________exercise 2.3_________________");
function displayMovie(movie) {
  return (
    movie.title +
    " " +
    movie.director +
    " " +
    movie.duration +
    " " +
    movie.releaseDate
  );
}
console.log(displayMovie(movie_1));
console.log("_____________________________exercise 2.4_________________");
function updateMovieRating(movie, newRating) {
  movie.rating = newRating;
  return movie;
}
console.log(updateMovieRating(movie_2, 9.5));
console.log("_____________________________exercise 2.5_________________");
function getMoviedirector(movie) {
  return movie.director;
}
console.log(getMoviedirector(movie_1));
console.log("_____________________________exercise 2.6_________________");
function getMovieRating(movie) {
  return movie.rating;
}
console.log(getMovieRating(movie_1));
console.log(
  "PARTII _______________________________________exercise 2.1___________________________",
);
function displayMovieList(movies) {
  let display = "";
  movies.forEach((movie, index) => {
    display += index + 1 + ". " + displayMovie(movie) + "\n";
  });
  return display;
}
console.log(displayMovieList(newmovies));
console.log("_____________________________exercise 2.2_________________");
function addMovie(movies, movie) {
  movies.push(movie);
  return movies;
}
console.log(
  addMovie(
    newmovies,
    makeMovie(
      "The Matrix",
      "The Wachowskis",
      136,
      1999,
      "Keanu Reeves, Laurence Fishburne",
      "Warner Bros.",
      "A computer hacker learns about the true nature of reality.",
      8.7,
    ),
  ),
);
console.log("_____________________________exercise 2.3_________________");
function removeMovie(movies, title) {
  for (let i = 0; i < movies.length; i++) {
    movie = movies[i];
    if (movie.title === title) {
      movies.splice(i, 1);
      return "Removed " + title;
    }
  }
  return "Could not find " + title;
}
console.log(removeMovie(newmovies, "Parasite"));
console.log(removeMovie(newmovies, "Dune"));
console.log("_____________________________exercise 2.4");
function findHighestRatedMovie(movies) {
  let highestRated = movies[0];
  movies.forEach((movie) => {
    if (movie.rating > highestRated.rating) {
      highestRated = movie;
    }
  });
  return highestRated;
}
console.log(findHighestRatedMovie(newmovies));
console.log("_____________________________exercise 3________________");
var team = [
  { name: "Karen", number: 10, position: "1B", battingAvg: 0.204 },
  { name: "Nick", number: 12, position: "CF", battingAvg: 0.282 },
  { name: "Taehyung", number: 44, position: "SS", battingAvg: 0.318 },
];
console.log("Exercise 3.1____________________________________");
function makePlayer(name, number, position, battingAvg) {
  return {
    name: name,
    number: number,
    position: position,
    battingAvg: battingAvg,
  };
}
makePlayer("karen", 10, "1B", 0.204);
console.log(makePlayer("karen", 10, "1B", 0.204));
console.log("Exercise 3.2____________________________________");
let player_1 = makePlayer("Karen", 10, "1B", 0.204);
let player_2 = makePlayer("Nick", 12, "CF", 0.282);
let player_3 = makePlayer("Taehyung", 44, "SS", 0.318);
console.log((teamarray = [player_1, player_2, player_3]));
console.log("Exercise 3.3____________________________________");
function displayPlayer(player) {
  return (
    player.name +
    " " +
    player.number +
    " " +
    player.position +
    " " +
    player.battingAvg
  );
}
console.log(displayPlayer(player_1));
console.log("Exercise 3.4");
function updatePlayerBattingAvg(player, newBattingAvg) {
  player.battingAvg = newBattingAvg;
  return player;
}
console.log(updatePlayerBattingAvg(player_3, 0.25));
console.log("Exercise 3.5________________________________");
function getPlayerName(player) {
  return player.name;
}
console.log(getPlayerName(player_1));
console.log("Exercise 3.6____________________________________");
function getPlayerBattingAvg(player) {
  return player.battingAvg;
}
console.log(getPlayerBattingAvg(player_1));
console.log("PARTII_______________________________________exercise 3.1");
function displayroster(team) {
  let displayplayer = "";
  for (let i = 0; i < team.length; i++) {
    displayplayer += i + 1 + ". " + displayPlayer(team[i]) + "\n";
  }
  return displayplayer;
}
console.log(displayroster(team));
console.log("Exercise 3.2");
function addPlayer(team, player) {
  team[team.length] = player;
  return team;
}
console.log(addPlayer(team, makePlayer("John", 22, "RF", 0.275)));

console.log("Exercise 3.3____________________________________");
function removePlayer(team, Playername) {
  for (let i = 0; i < team.length; i++) {
    if (team[i].name === Playername) {
      team.splice(i, 1);
      return "Removed " + Playername;
    }
  }
  return "Could not find " + Playername;
}
console.log(removePlayer(team, "Karen"));
console.log(removePlayer(team, "Samir"));

console.log("Exercise 3.4____________________________________");

function findBestHitter(team) {
  let bestHitter = team[0];
  for (let i = 1; i < team.length; i++) {
    if (team[i].battingAvg > bestHitter.battingAvg) {
      bestHitter = team[i];
    }
  }
  return bestHitter;
}
console.log(findBestHitter(team));
console.log("Exercise 3.5");
function makePlayerWithStats(name, number, position, battingAvg, atBats, hits) {
  return {
    name: name,
    number: number,
    position: position,
    battingAvg: battingAvg,
    atBats: 0,
    hits: 0,
  };
}
console.log(makePlayerWithStats("aren", 10, "1B", 0.204));
