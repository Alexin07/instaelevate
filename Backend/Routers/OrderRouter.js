const express = require('express')
const OrderController = require('../Controllar/OrderContollar')
const OrderRouter = express.Router()



OrderRouter.post("/", (req, res) => {
    console.log(req)
    const result = new OrderController().create(req.body)
        .then(
            (success) => {
                res.send(success)
            }
        ).catch((error) => {
            res.send(error)
        })

})
OrderRouter.get("/done", (req, res) => {
    console.log(req)
    const result = new OrderController().dashboard()
        .then(
            (success) => {
                res.send(success)
            }
        ).catch((error) => {
            res.send(error)
        })
})

module.exports = OrderRouter;
