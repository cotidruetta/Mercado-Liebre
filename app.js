const express = require ('express');
const path = require ('path');

const app = express();
app.use(express.static(path.join(__dirname, '/public')));

app.get ('/home', function (req,res){
    res.sendFile (path.join (__dirname, './views/index.html'));
});

app.get ('/register', function (req,res){
    res.sendFile (path.join (__dirname, './views/register.html'))
})

app.get ('/login', function (req,res){
    res.sendFile (path.join (__dirname, './views/login.html'))
})

app.get ('*', function (req,res){
    res.send ("error. No hemos encontrado esa direccion")
});

app.listen (3030, () => console.log('servidor corriendo :)'));