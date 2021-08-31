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
/*
Enquanto baixamos, ainda temos que instalar o MySQL no NodeJS. Dentro do terminal do nosso projeto no Visual Studio Code, digitaremos npm install mysql e executaremos.

Terminada a instalação do package, abriremos a janela do "MySQL Installer" e poderíamos baixar apenas o "Developer Default" clicando nesta opção, mas selecionaremos "Custom" para personalizarmos algumas configurações.

Na lista de "Available Porducts:", usaremos somente as últimas versões do MySQL Server e do MySQL Workbench no tópico de "Applications". Clicaremos na seta para transferir os dois itens da primeira lista para "Products/Features To Be Installed:".

Prosseguindo, clicaremos em "Execute" na página seguinte do instalador para finalizarmos. O MySQL Server será nosso banco de dados e o Workbench é uma plataforma que nos auxiliará com visualizações de tabelas e dados.

Finalizada a instalação dos dois itens, Clicaremos em "Next >" e, na parte "High Availability", deixaremos a versão clássica "Standalone MySQL Server..." mesmo.

Avançando para "Type and Networking", se a porta padrão 3306 já estiver sendo usada no campo "Port:", poderemos trocá-la. Mas caso não esteja em uso, poderemos ficar com esta sem problemas. Em nosso caso específico, digitaremos "3307" mas avalie se é seu caso também.

Na seção seguinte, usaremos o "Legacy Authentication Method" na parte de escolha do método de autenticação e prosseguiremos.

Em "Accounts and Roles", escolheremos uma senha padrão e avançaremos para "Windows Service", onde pediremos para configurar como "Standart System Account" mesmo.

Adiante em "Apply Configuration", pediremos que o instalador do MySQL execute os itens de "Configuration Steps" clicando em "Execute" para que faça a configuração inicial.

A parte de inicializar o database pode demorar um pouco, mas terminado o processo, poderemos finalizar em "Finish". Quando estivermos na seção "Installation Complete", deixaremos a opção de iniciar o Workbench após terminarmos.

Com isso, a primeira coisa que o sistema fará será criar um banco de dados para trabalharmos; abrindo o MySQL Workbench, criaremos uma nova conexão na janela "Setup New Connection" chamada agenda-petshop no campo "Connection Name:".

Sua senha será root mesmo no campo "Username:", porém a porta será a mesma "3307" que alteramos anteriormente. Feito isso, poderemos finalizar a criação da conexão.

Após salvarmos, clicaremos em agenda-petshop na lista de conexões MySQL na página inicial do Workbench, e então o acessaremos com a senha padrão escolhida.

Quando abrirmos esta nova aba, encontraremos o painel lateral chamado "Navigator" que contém o tópico "SCHEMAS" com apenas o item de sistema salvo.

Clicaremos nesta lista com o botão direto do mouse e escolheremos a opção "Create Schema..." para nomearmos como agenda-petshop no campo "Name:".

Clicando no botão "Apply", abriremos uma nova janela e clicaremos em "Apply" novamente, e depois avançaremos até seu fim. Feito tudo isso, teremos finalmente um banco de dados para utilizarmos.
*/