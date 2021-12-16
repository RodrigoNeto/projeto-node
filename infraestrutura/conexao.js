const mysql = require('mysql2')

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user:'rodrigo',
    password: '1803',
    database: 'agenda-petshop'
})

module.exports = conexao