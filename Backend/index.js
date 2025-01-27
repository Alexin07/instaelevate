const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const OrderRouter = require("./Routers/OrderRouter")

require("dotenv").config();

const FrontendBaseUrl = process.env.VITE_API_BASE_URL
const PORT = process.env.PORT || 5000;
const DataBaseUrl = process.env.VITE_API_DATABASE_URL


const app = express();
app.use(express.json())
app.use(cors({
    origin: FrontendBaseUrl,
    credentials: true
}));

app.get("/", (req, res) => {
    res.send("okay done")
}
       )



app.use("/payment", OrderRouter)
app.use("/dashboard", OrderRouter)
app.use("/delete", OrderRouter)


mongoose.connect(DataBaseUrl, {
    dbName: "StripPage",
}).then(
    (success) => {
        console.log("Db connection successful")
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })
    }
).catch(
    (err) => {
        console.log("Db connection failed")
        console.log(err)
    }
)
