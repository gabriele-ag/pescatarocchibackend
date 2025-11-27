function NotFound (req, res, next) {
    res.status(404)
    res.json({
        error: "Errore 404, risorsa non trovata"
    })
}

export default NotFound