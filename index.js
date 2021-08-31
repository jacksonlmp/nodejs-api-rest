const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/conexao')
const Tabelas = require('./infraestrutura/tabelas')

conexao.connect()

const app = customExpress(erro => {
    if(erro){
        console.log(erro)
    }
    else{
        console.log('Conectado com sucesso!')
        
        Tabelas.init(conexao)
        const app = customExpress()
        app.listen(4000, () => console.log('Rodando na 4000'))
    }
})


