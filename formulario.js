var express = require('express');
var sqlite3 = require('sqlite3').verbose();
var http = require('http');
var app = express();
var server = http.createServer(app);
var path = require('path');
var db = new sqlite3.Database('./Database/Banco.db');



app.use(express.static(path.join(__dirname, './public')))

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname,'./index.html'));
});

app.post('/add', function(req,res){ 
    console.log(req.params);
    //Serializando o Banco de dados para realizar a função de adicionar
    db.serialize(()=>{'Insert into Usuario (nome,senha,email,idade) values (?,?,?,?)', [req.body.nome,req.body.senha,req.body.email,req.body.idade],
        function(err){

            //Detecção de erros, caso não ocorra insere na Tabela
            if(err){
                
                return console.log(err.message);
            }
            console.log("Funcionario Adicionado com Sucesso");
            res.send("<H1>Sucesso!</H1>")
            res.send("<H2>O usuário</H2>" + req.body.nome +", com email" + req.body.email + ", foi adicionado com sucesso.")
        }
    })                        
});

//Servidor Ouvindo!
server.listen(3333, function(){
    console.log("Server listening on port: 3333");
});