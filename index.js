const express = require("express");
const { send } = require("express/lib/response");
const mongoose = require("mongoose")


const allRouter = require('./routes/index')

const app = express();
const PORT = process.env.PORT || 3000;

const uri = "mongodb+srv://product:product123@cluster0.an1ff.mongodb.net/db_flower?retryWrites=true&w=majority";

mongoose
  .connect(uri)
  .then(() => console.log("berhasil konek ke mongoose"))
  .catch((err) => console.log("gagal konek ke mongo"));


app.use(express.json());

app.use(express.urlencoded({ extend: true }));

app.use(allRouter)

app.listen(PORT, () => {
  console.log("server online on PORT", PORT);
});
