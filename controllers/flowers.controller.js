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
        const { role } = req.user;

        if (role === "admin" || role === "member") {
            const flower = await Flowers.findById(id, "-_id -__v");

            try {
                res.json({
                    message: `Success get data ${id}`,
                    data: flower
                })
            } catch (error) {
                res.status(500).send(error);
            }
        } else {
            res.send("Please, registration first. Thank you!");
        }
    },

    addFlower: async (req, res) => {
        const data = req.body;
        const { role } = req.user;

        if (role === "admin") {
            try {
                await Flowers.create(data);
                res.json({
                    message: "Success add new data flower",
                    data: data
                })
            } catch (error) {
                res.status(500).send(error);
            }
        } else {
            res.send("You're not allowed to add data flower");
        }
    },

    updateFlower: async (req, res) => {
        const id = req.params.id;
        const data = req.body;
        const { role } = req.user;

        if (role === "admin") {
            try {
                await Flowers.findByIdAndUpdate(id, data);
                res.json({
                    message: `Success update data ${id}`,
                    data: data
                })
            } catch (error) {
                res.status(500).send(error);
            }
        } else {
            res.send("You're not allowed to update data flower")
        }
    },

    deleteFlower: async (req, res) => {
        const id = req.params.id;
        const { role } = req.user;

        if (role === "admin") {
            try {
                await Flowers.findByIdAndDelete(id);
                res.json({
                    message: `Flower ${id} was removed`
                })
            } catch (error) {
                res.status(500).send(error);
            }
        } else {
            res.send("You're not allowed to delete data flower");
        }
    }
}