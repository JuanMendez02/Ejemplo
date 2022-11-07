//Crear aplicación de express
const express = require('express');
const res = require('express/lib/response');
//Ejecutar aplicación de express
const app = express()
//Definicion del puerto, donde se manipulan las variables de ambiente
const port = process.env.PORT || 3000;

//Mostrar 
app.get('/juanm',(req,res)=>{
    res.send('Hola soy JuanM')
})

//Jose hola
app.get('/jose',(req,res)=>{
    res.send('Hola soy jose')
})

app.get('/pedro',(req,res)=>{
    res.send('Hola soy pedro')
})

//Definir el parametro donde la aplicacion escucha
app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})