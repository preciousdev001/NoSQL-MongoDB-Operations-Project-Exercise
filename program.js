const connect = require("./db");

const runDatabaseQueries = async () => {
  const db = await connect();
  const movies = db.collection("movies");

  //   const users = db.collection("users");

  //   // Run this query, should get top 5 best rated movies on IMDB
  //   const topMovies = await movies
  //     .find({ "imdb.rating": { $gt: 8.0 } })
  //     .project({ title: 1, year: 1, "imdb.rating": 1 })
  //     .sort({ "imdb.rating": -1 })
  //     .limit(5)
  //     .toArray();

  // added a new user raven baxter into the users collection
  //   const result = await users.insertOne({
  //     name: "Raven Baxter",
  //     email: "raven_baxter@disney.com",
  //   });

  //   console.log("Top Rated Movies:", topMovies);
  // show the new user added
  //   console.log("New user created with ID", result.insertedId);

  //   number 1 find all movies directed by christopher nolan
  //   const nolanMovies = await movies
  //     .find({ directors: "Christopher Nolan" })
  //     .toArray();
  //   console.log("1. Christopher Nolan Movies:", nolanMovies);

  // number 2 Find movies that include the genre "Action" and sort (descending) them by year.
  const actionMoviesByYear = await movies
    .find({ genres: "Action" })
    .sort({ year: -1 })
    .toArray();
  console.log("2. Action Movies (Sorted By Year Desc)", actionMoviesByYear);

  process.exit(0);
};

runDatabaseQueries();
