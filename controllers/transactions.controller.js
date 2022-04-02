const { Transactions } = require("../models");

module.exports = {
    getAll: async (req, res) => {
        const { role } = req.user;

        if (role === "admin" || role === "member") {
            const transaction = await Transactions.find({}, "-__v").populate("user cart", "-__v");

            try {
                res.json({
                    message: "success get all data transaction",
                    data: transaction
                })
            } catch (error) {
                res.status(500).send(error);
            }
        } else {
            res.send("Please, registration first. Thank you!");
        }
    },

    getById: async (req, res) => {
        const id = req.params.id;
        const { role } = req.user;

        if (role === "admin" || role === "member") {
            const transaction = await Transactions.findById(id, "-__v");

            try {
                res.json({
                    message: `Success get data ${id}`,
                    data: transaction
                })
            } catch (error) {
                res.status(500).send(error);
            }
        } else {
            res.send("Please, registration first. Thank you!");
        }
    },

    addTransaction: async (req, res) => {
        const data = req.body;
        const { role } = req.user;

        if (role === "member") {
            try {
                await Transactions.create(data);
                res.json({
                    message: "Success created data",
                    data: data
                })
            } catch (error) {
                res.status(500).send(error);
            }
        } else {
            res.send("Please, registration first. Thank you!");
        }
    },

    updateTransaction: async (req, res) => {
        const id = req.params.id;
        const { role } = req.user;

        if (role === "admin" || role === "member") {
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
        } else {
            res.send("Please, registration first. Thank you!");
        }
    },

    deleteTransaction: async (req, res) => {
        const id = req.params.id;
        const { role } = req.user;

        if (role === "admin" || role === "member") {
            try {
                await Transactions.findByIdAndDelete(id)
                res.json({
                    message: `Success delete data ${id}`
                })
            } catch (error) {
                res.status(500).send(error);
            }
        } else {
            res.send("Please, registration first. Thank you!");
        }
    }
};