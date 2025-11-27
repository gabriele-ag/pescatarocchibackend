import {tarots} from "../data/tarots.js"

const getNewID = () => {
    if(tarots.length === 0) {
        return 0
    }
    const maxID = Math.max(...tarots.map(curTarot => parseInt(curTarot.id)))
    return maxID + 1
}

// INDEX
const index = (req, res) => {

    let result = tarots

    res.json({
        data: result,
        count: tarots.length
    })
}

// SHOW
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

// UPDATE
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

// STORE
const store = (req, res) => {
    const newTarotData = req.body
    if (!newTarotData ||
        !newTarotData.numero ||
        !newTarotData.nome ||
        !newTarotData.dritto ||
        !newTarotData.significato ||
        !newTarotData.significato.dritto ||
        !newTarotData.significato.rovesciato ||
        !newTarotData.messaggio ||
        !newTarotData.img) {
            return res.status(400).json({
                success: false,
                message: "Dati mancanti: assicurati di includere i campi richiesti"
            })
        }

    const newTarot = {
    id: getNewID(),
    ...newTarotData
    };

    tarots.push(newTarot);
    res.status(201).json({
        data: newTarot,
        message: "Nuova carta creata con successo"
    });
}

// DESTROY
const destroy = (req, res) => {
    const tarotID = parseInt(req.params.id)
    const index = tarots.findIndex((curIndex) => curIndex.id === tarotID)

    if (index === -1) {
        return res.status(404).json({
            success: false,
            message: "Impossibile trovare i dati da cancellare: id inesistente"
        })
    }

    tarots.splice(index, 1)

    res.sendStatus(204)
}

const tarotsController = {
    index,
    show,
    update,
    store,
    destroy
};

export default tarotsController