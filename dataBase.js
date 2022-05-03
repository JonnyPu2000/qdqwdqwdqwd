var sqlite3 = require('sqlite3').verbose(); //Criando a variável do sqlite3
var db = new sqlite3.Database('./Database/Banco.db'); //Criando a variável do Banco de dados

db.run('Create TABLE if not exists Usuario(nome varchar (25) not null, senha varchar (25) not null, email varchar (25) not null, idade int not null)');
console.log("Tabela criada com sucesso!");

