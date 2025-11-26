import {tarots} from "../data/tarots.js"


const index = (req, res) => {

    let result = tarots

    res.json({
        data: result,
        count: tarots.length
    })
}

const show = (req, res) => {
    const tarotsId = parseInt(req.params.id)
    const singleTarot = tarots.find((curTarot) => curTarot.id === tarotsId)

    if (singleTarot === undefined) {
        return res.status(404).json({
            success: false,
            message: "Dato non trovato: id inesistente"
        })
    }

    res.json({
        data: singleTarot
    })
}

const tarotsController = {
    index,
    show
};

export default tarotsController