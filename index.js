const express = require('express');
const cors = require('cors');

const server = express();
const port = process.env.PORT || 3000
const brands = require('./src/data/brands.json');
const cars = require('./src/data/cars.json');

server.use(cors());


server.get('/',(req, res)=>{
    return res.json('not found');
})

server.get('/brands',(req, res)=>{
        return res.json(brands);
})

server.get('/cars',(req, res)=>{
    const {id} = req.query;
    
    if(!id){
        return res.status(400).json({error: 'Informe um ID valido'})
    }else if(id>5){
        return res.status(400).json({error: 'ID informado está invalido'})
    }

    const listCars = cars.filter( t=> t.idbrand ==id)

    return res.json(listCars);
})

server.listen(port);