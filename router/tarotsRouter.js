import express from "express"
import tarotsController from "../controllers/tarotsController.js"

const router = express.Router()

router.get("/", tarotsController.index)
router.get("/:id", tarotsController.show)
router.post("/", tarotsController.store)
router.put("/:id", tarotsController.update)
router.delete("/:id", tarotsController.destroy)

export default router