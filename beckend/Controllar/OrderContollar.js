

const OrderModel = require("../Models/OrderModel")

class OrderController {

    create(data) {
        return new Promise(
            async (resolve, reject) => {
                const CreateOrder = await OrderModel.create(data)
                    .then(
                        (success) => {
                            resolve(
                                {
                                    status: 1,
                                    message: "Order created successfully",
                                    data: success
                                }
                            )
                        }
                    ).catch((err) => {
                        console.log(err)
                        reject(
                            {
                                status: 0,
                                message: "Failed to create order",
                            }
                        )
                    })
            })
    }
    dashboard() {
        return new Promise(
            async (resolve, reject) => {
                const dashboardData = await OrderModel.find({})
                    .then(
                        (success) => {
                            resolve(
                                {
                                    status: 1,
                                    message: "Dashboard data fetched successfully",
                                    data: success
                                }
                            )
                        }
                    ).catch((err) => {
                        console.log(err)
                        reject(
                            {
                                status: 0,
                                message: "Failed to fetch dashboard data",
                            }
                        )
                    })
            })
    }
}


module.exports = OrderController;