

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
    deleteOrder(id) {
        return new Promise(
            async (resolve, reject) => {
                const deleteOrder = await OrderModel.findByIdAndDelete(id)
                    .then(
                        (success) => {
                            resolve(
                                {
                                    status: 1,
                                    message: "Order deleted successfully",
                                    data: success
                                }
                            )
                        }
                    ).catch((err) => {
                        console.log(err)
                        reject(
                            {
                                status: 0,
                                message: "Failed to delete order",
                            }
                        )
                    })
            })
    }
     deleteMany() {
        return new Promise(
            async (resolve, reject) => {
                const deleteOrder = await OrderModel.deleteMany({})
                    .then(
                        (success) => {
                            resolve(
                                {
                                    status: 1,
                                    message: "All orders deleted successfully",
                                    data: success
                                }
                            )
                        }
                    ).catch((err) => {
                        console.log(err)
                        reject(
                            {
                                status: 0,
                                message: "Failed to delete all orders",
                            }
                        )
                    })
            })
    }
}


module.exports = OrderController;
