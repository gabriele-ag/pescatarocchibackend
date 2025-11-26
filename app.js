import express from "express"
import cors from "cors"
import "dotenv/config"

import tarotsRouter from "./router/tarotsRouter.js"

const app = express()
const port = process.env.PORT;

app.use(express.json())
app.use(express.static("public"))
app.use(cors({ origin: process.env.FE_URL}))

app.get("/", (req, res) => {
    const resData = {
        data: "Server dei tarocchi"
    }

    res.json(resData)
})

app.use("/api/tarots", tarotsRouter)

app.listen(port, () => {
    console.log(`server in ascolto sulla porta ${port}`)
})