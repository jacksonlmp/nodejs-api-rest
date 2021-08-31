const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/conexao')

conexao.connect()
const app = customExpress(erro => {
    if(erro){
        console.log(erro)
    }
    else{
        console.log('Conectado com sucesso!')
        
        const app = customExpress()
        app.listen(4000, () => console.log('Rodando na 4000'))
    }
})


