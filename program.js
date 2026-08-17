const connect = require("./db");

const runDatabaseQueries = async () => {
  const db = await connect();
  const movies = db.collection("movies");

  const users = db.collection("users");

  // Run this query, should get top 5 best rated movies on IMDB
  const topMovies = await movies
    .find({ "imdb.rating": { $gt: 8.0 } })
    .project({ title: 1, year: 1, "imdb.rating": 1 })
    .sort({ "imdb.rating": -1 })
    .limit(5)
    .toArray();

  const result = await users.insertOne({
    name: "Raven Baxter",
    email: "raven_baxter@disney.com",
  });

  console.log("Top Rated Movies:", topMovies);

  console.log("New user created with ID", result.insertedId);

  process.exit(0);
};

runDatabaseQueries();
