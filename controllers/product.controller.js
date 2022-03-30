const { Product } = require('../models/index')

module.exports = {
    getAll: async(req, res)=>{
        const data = await Product.find({}, "-__v")
    
        try {
          res.json({
            message: "berhasil ambil data product",
            data: data,
          });
        } catch (err) {
          console.log(err);
          res.status(500).send(err);
        }
    },

    getById: async (req, res) => {
        const data = await Product.findById(req.params.id);
        try {
          res.json({
            message: "berhasil ambil data product",
            data: data,
          });
        } catch (err) {
          console.log(err);
          res.status(500).send(err);
        }
      },

    addProduct: async (req, res) => {
        const data = req.body;
      
        try {
          await Product.create(data);
          res.json({
            message: "berhasil input data"
          });
        } catch (err) {
          console.log(err);
          res.status(500).send(err);
        }
      },

      updateProductById: async (req, res) => {
        const validasiId = await Product.findById(req.params.id)
    
        await Product.updateOne({_id: req.params.id}, {$set: req.body});
      try {
        res.json({
          message: "berhasil update data product byID"
        });
      } catch (err) {
        console.log(err);
        res.status(400).send(err);
      }
    },

    deleteProductById: async (req, res) => {
        await Product.deleteOne({_id: req.params.id});
        try {
          res.json({
            message: "berhasil delete data product byID"
          });
        } catch (err) {
          console.log(err);
          res.status(500).send(err);
        }
      }

}