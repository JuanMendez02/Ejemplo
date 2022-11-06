//Crear aplicación de express
const express = require('express');
const res = require('express/lib/response');
//Ejecutar aplicación de express
const app = express()
//Definicion del puerto, donde se manipulan las variables de ambiente
const port = process.env.PORT || 3000;

app.get('/juanm',(req,res)=>{
    res.send('Hola soy JuanM')
})

//Definir el parametro donde la aplicacion escucha
app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})