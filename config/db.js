const mongoose = require("mongoose");

const uri = "mongodb+srv://group2:group2@cluster0.an1ff.mongodb.net/db_flower?retryWrites=true&w=majority";

const db = mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = db;