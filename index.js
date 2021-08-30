const customExpress = require('./config/customExpress')
const app = customExpress()

app.listen(4000, () => console.log('Rodando na 4000'))
