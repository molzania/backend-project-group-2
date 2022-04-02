const { Flowers } = require("../models");

module.exports = {
    getAll: async (req, res) => {
        const flowers = await Flowers.find({}, "-__v");

        try {
            res.json({
                message: "Success get all data Flowers",
                data: flowers
            })
        } catch (error) {
            res.status(500).send(error);
        }
    },

    getById: async (req, res) => {
        const id = req.params.id;

        const flower = await Flowers.findById(id, "-__v");

        try {
            res.json({
                message: `Success get data ${id}`,
                data: flower
            })
        } catch (error) {
            res.status(500).send(error);
        }
    },

    addFlower: async (req, res) => {
        const data = req.body;

        try {
            await Flowers.create(data);
            res.json({
                message: "Success add new data flower",
                data: data
            })
        } catch (error) {
            res.status(500).send(error);
        }
    },

    updateFlower: async (req, res) => {
        const id = req.params.id;
        const data = req.body;

        try {
            await Flowers.findByIdAndUpdate(id, data);
            res.json({
                message: `Success update data ${id}`,
                data: data
            })
        } catch (error) {
            res.status(500).send(error);
        }
    },

    deleteFlower: async (req, res) => {
        const id = req.params.id;

        try {
            await Flowers.findByIdAndDelete(id);
            res.json({
                message: `Flower ${id} was removed`
            })
        } catch (error) {
            res.status(500).send(error);
        }
    }
}