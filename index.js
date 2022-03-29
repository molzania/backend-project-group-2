const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(express.urlencoded({ extend: true }));

app.listen(PORT, () => {
  console.log("server online on PORT", PORT);
});
