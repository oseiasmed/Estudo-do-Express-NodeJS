const express = require('express')
const app = express()

app.get("/", (req, res) => {

    res.send("Olá, seja muito bem vindo a nossa Home Page.")
})

app.get("/blog", (req, res) => {

    res.send("Olá, seja muito bem vindo ao nosso Blog")
})

app.get("/videos", (req, res) => {

    res.send("Olá, esta é a nossa página de vídeos")
})

app.listen(3000, function (erro) {

    if (erro) {
        console.log('Ocorreu um erro')
    } else {

        console.log('Servidor iniciado com sucesso')
    }
})