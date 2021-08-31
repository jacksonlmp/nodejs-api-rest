const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: 'admin',
    database: 'agenda-petshop'
})

module.exports = conexao

//Aula 02 - Criando nossa base de dados com Mysql,
//Baixar Mysql e criar banco com nome agenda-petshop