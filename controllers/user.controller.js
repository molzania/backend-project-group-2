const userModels = require("../models/userModels");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const accessTokensecret = "hallo";
module.exports = {
  getAll: async (req, res) => {
    const users = await userModels.find({}, "-_v");
    console.log("users");

    try {
      res.json({
        massage: "berhasil ambil data user",
        data: users,
      });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  },

  getByID: async (req, res) => {
    const users = await userModels.findById(req.params.id);
    try {
      res.json({
        message: "berhasil ambil data user",
        data: users,
      });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  },

  addUser: async (req, res) => {
    const data = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(data.password, salt);
    data.password = hash;

    try {
      await userModels.create(data);
      console.log(data);
      res.json({
        message: "berhasil input data",
        data: 1,
      });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  },

  Login: async (req, res) => {
    const {email, password} = req.body;
    const user = await userModels.findOne({email: email});
    console.log(user)
    const unHash = bcrypt.compareSync(password, user.password);
    try {
      if(user && unHash){
        const accessToken = jwt.sign({email: user.email}, accessTokensecret);
        
        res.json({accessToken});
      } else {
        res.json({error: "Salah password"})
      }

    } catch (error) {
      res.status(500).send(error);
    }
  }
};
