db.movies.countDocuments({
    directors: "Hal Roach",
    "awards.wins": { $gt: 0 },
});