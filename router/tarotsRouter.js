import express from "express"
import tarotsController from "../controllers/tarotsController.js"

const router = express.Router()

router.get("/", tarotsController.index)

export default router