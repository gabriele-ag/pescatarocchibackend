import express from "express"
import tarotsController from "../controllers/tarotsController.js"

const router = express.Router()

router.get("/", tarotsController.index)
router.get("/:id", tarotsController.show)

export default router