const { Transactions } = require("../models");

module.exports = {
    getAll: async (req, res) => {
        const transaction = await Transactions.find({}, "-__v").populate("user cart", "-__v");

        try {
            res.json({
                message: "success get all data transaction",
                data: transaction
            })
        } catch (error) {
            res.status(500).send(error);
        }
    },

    getById: async (req, res) => {
        const id = req.params.id;
        const transaction = await Transactions.findById(id, "-__v");

        try {
            res.json({
                message: `Success get data ${id}`,
                data: transaction
            })
        } catch (error) {
            res.status(500).send(error);
        }
    },

    addTransaction: async (req, res) => {
        const data = req.body;

        try {
            await Transactions.create(data);
            res.json({
                message:  "Success created data",
                data: data
            })
        } catch (error) {
            res.status(500).send(error);
        }
    },

    updateTransaction: async (req, res) => {
        const id = req.params.id;
        const data = req.body;

        try {
            await Transactions.findByIdAndUpdate(id, data);
            res.json({
                message: `Transaction ${id} data updated`,
                data: data
            })
        } catch (error) {
            res.status(500).send(error);
        }
    },

    deleteTransaction: async (req, res) => {
        const id = req.params.id;
        try {
            res.json({
                message: `Success delete data ${id}`
            })
        } catch (error) {
            res.status(500).send(error);
        }
    }
};