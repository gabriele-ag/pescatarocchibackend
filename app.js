import express from "express"
import "dotenv/config"

const app = express()
const port = process.env.PORT;

app.use(express.json())
app.use(express.static("public"))
// app.use(cors({ origin: process.env.FE_URL}))

app.listen(port, () => {
    console.log(`server in ascolto sulla porta ${port}`)
})