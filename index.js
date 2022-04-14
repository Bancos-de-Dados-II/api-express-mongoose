require('dotenv').config();
const express = require('express');
const app = express();

app.get('/', (req, resp)=>{
    resp.send('ok');
});

app.listen(process.env.API_PORT, ()=>{
    console.log(`API rodando na porta ${process.env.API_PORT}`);
});