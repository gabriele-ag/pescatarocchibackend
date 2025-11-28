import express from "express"
import cors from "cors"
import "dotenv/config"
import path from "path"
import { fileURLToPath } from "url"

import tarotsRouter from "./router/tarotsRouter.js"
import errorHandler from "./middleware/errorHandlers.js"
import NotFound from "./middleware/notFound.js"



const app = express()
const port = process.env.SERVER_PORT;

app.use(cors({ origin: process.env.FE_URL}))
app.use(express.static("public"))
app.use(express.json())

app.get("/", (req, res) => {
    const resData = {
        data: "Server dei tarocchi"
    }

    res.json(resData)
})

app.use("/tarots", tarotsRouter)

app.use(NotFound)
app.use(errorHandler)

app.listen(port, () => {
    console.log(`server in ascolto sulla porta ${port}`)
})