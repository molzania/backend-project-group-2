const express = require("express");
const cors = require("cors");
const db = require("./config/db");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extend: true }));

db
  .then(() => console.log("Success connect to MongoDB Atlas"))
  .catch(err => console.log(err));

app.listen(PORT, () => {
  console.log("server online on PORT", PORT);
});
