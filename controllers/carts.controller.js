const { Carts } = require("../models")

module.exports = {
    getAll: async (req, res) => {
        const carts = await Carts.find({}, "-__v").populate("product", "-__v");
        
        try {
            res.json({
                message: "Success get all data from Carts",
                data: carts
            });
        } catch (error) {
            res.status(500).send(error);
        }
    },

    getById: async (req, res) => {
        const id = req.params.id;

        const cart = await Carts.findById(id, "-__v").populate("product", "-__v");

        try {
            res.json({
                message: `Success get data ${id}`,
                data: cart
            })
        } catch (error) {
            res.status(500).send(error);
        }
    },

    addCart: async (req, res) => {
        const data = req.body;

        try {
            await Carts.create(data);
            res.json({
                message: "Success add data",
                data: data
            })
        }
        catch (error) {
            res.status(500).send(error);
        }
    },

    updateCart: async (req, res) => {
        const data = req.body;
        const id = req.params.id;

        try {
            await Carts.findByIdAndUpdate(id, data);
            res.json({
                message: `Cart ${id} data updated`,
                data: data
            })
        } catch (error) {
            
        }
    },

    deleteCart: async (req, res) => {
        const id = req.params.id;

        try {
            await Carts.findByIdAndDelete(id);
            res.json({
                message: `Cart ${id} was removed`
            })
        }
        catch (error) {
            res.status(500).send(error);
        }
    },
}