const express = require('express')
const app = express()

app.listen(4000, () => console.log('Rodando na 4000'))
app.get('/', (req, res) => res.send('Rodando All e FLYING') )