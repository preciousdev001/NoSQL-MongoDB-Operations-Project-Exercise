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
  //   const actionMoviesByYear = await movies
  //     .find({ genres: "Action" })
  //     .sort({ year: -1 })
  //     .toArray();
  //   console.log("2. Action Movies (Sorted By Year Desc)", actionMoviesByYear);

  // number 3 Find movies with an IMDb rating greater than 8 and return only the title and IMDB information.

  //   const topRated = await movies
  //     .find({ "imdb.rating": { $gt: 8 } })
  //     .project({ title: 1, imdb: 1, _id: 0 })
  //     .toArray();
  //   console.log("3. Top Rated Movies:", topRated);

  // 4. Find movies that starred both "Tom Hanks" and "Tim Allen".
  //   const hanksAndAllenMovies = await movies
  //     .find({ cast: { $all: ["Tom Hanks", "Tim Allen"] } })
  //     .toArray();
  //   console.log("4. Movies with Tom Hanks and Tim Allen", hanksAndAllenMovies);

  //   // 5. Find movies that starred both and only "Tom Hanks" and "Tim Allen".
  //   const hanksAndAllenOnlyMovies = await movies
  //     .find({
  //       $or: [
  //         {
  //           cast: ["Tom Hanks", "Tim Allen"],
  //           cast: ["Tim Allen", "Tom Hanks"],
  //         },
  //       ],
  //     })
  //     .toArray();
  //   console.log(
  //     "5. Movies with ONLY Tom Hanks and Tim Allen",
  //     hanksAndAllenOnlyMovies,
  //   );
  //   6. Find comedy movies that are directed by Steven Spielberg.
  //   const spielbergComedies = await movies
  //     .find({ directors: "Steven Spielberg", genres: "Comedy" })
  //     .toArray();
  //   console.log("6. Spielberg Comedy Movies:", spielbergComedies);

  // update portion now
  // 1. Add a new field "available_on" with the value "Sflix" to "The Matrix". don't need a new variable since were just making changes in db
  //   await movies.updateOne(
  //     { title: "The Matrix" },
  //     { $set: { available_on: "Sflix" } },
  //   );

  // 2. Increment the metacritic of "The Matrix" by 1.
  //   await movies.updateOne({ title: "The Matrix" }, { $inc: { metacritic: 1 } });

  // 3. Add a new genre "Gen Z" to all movies released in the year 1997.
  //   await movies.updateMany({ year: 1997 }, { $addToSet: { genres: "Gen Z" } });

  //   4. Increase IMDb rating by 1 for all movies with a rating less than 5.
  await movies.updateMany(
    { "imdb.rating": { $lt: 5 } },
    { $inc: { "imdb.rating": 1 } },
  );

  console.log("all updates complete!");

  process.exit(0);
};

runDatabaseQueries();
