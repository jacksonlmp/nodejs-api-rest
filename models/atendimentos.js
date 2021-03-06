const moment = require('moment')
const conexao = require('../infraestrutura/conexao')

class Atendimento{
    adiciona(atendimento, res){
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        const atendimentoDatado = {...atendimento, dataCriacao, data}

        const dataEhValida = moment(data).isSameOrAfter(dataCriacao)
        const clienteEhValido = atendimento.cleinte.lenght >=5

        const validacoes = [
            {
                nome: 'data',
                valido: dataEhValida,
                mensagem: 'Data deve ser maior ou igual a data atual'
            },
            {
                nome: 'cliente',
                valido: clienteEhValido,
                mensagem: 'Cliente deve ter pelo menos cinco caracteres'
            }
        ]
        
        const sql = 'INSERT INTO Atendimentos SET ?'

        conexao.query(sql, atendimentoDatado, atendimento, (erro) => {
            if(erro){
                res.status(400).json(erro)
            }
            else{
                res.status(201).json(resultados)
            }
        })
    }
}

module.exports = new Atendimento