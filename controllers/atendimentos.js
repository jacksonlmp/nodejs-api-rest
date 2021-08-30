module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('Rodando All in Antedimentos'))

    app.post('/atendimentos', (req, res) => {
        console.log(req.body)
        res.send('Rota de Atendimento e POST')})

}

