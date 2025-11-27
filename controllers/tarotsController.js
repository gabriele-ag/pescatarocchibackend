import {tarots} from "../data/tarots.js"


const index = (req, res) => {

    let result = tarots

    res.json({
        data: result,
        count: tarots.length
    })
}

const show = (req, res) => {
    const tarotId = parseInt(req.params.id)
    const singleTarot = tarots.find((curTarot) => curTarot.id === tarotId)

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

const update = (req, res) => {
    const tarotID = parseInt(req.params.id)
    const updatedTarot = req.body
    const tarot = tarots.find((curTarot) => curTarot.id === tarotID)

    if (!tarot) {
        return res.status(404).json({
            success: false,
            message: "Impossibile trovare i dati da modificare: id inesistente"
        })
    }

    tarot.numero = updatedTarot.numero
    tarot.nome = updatedTarot.nome
    tarot.dritto = updatedTarot.dritto
    tarot.significato.dritto = updatedTarot.significato.dritto
    tarot.significato.rovesciato = updatedTarot.significato.rovesciato
    tarot.messaggio = updatedTarot.messaggio
    tarot.img = updatedTarot.img


    res.json({
        data: tarot,
        message: `Carta con ID ${tarotID} modificata con successo`
    })
}

const tarotsController = {
    index,
    show,
    update
};

export default tarotsController