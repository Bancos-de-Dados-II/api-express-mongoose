require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());
const pessoaController = require('./controllers/PessoaController');

app.get('/', pessoaController.sincronizar);

app.get('/pessoas', pessoaController.getPessoas);

app.post('/pessoas', pessoaController.addPessoa);

app.delete('/pessoa/:email', pessoaController.deletarPessoa);

app.put('/pessoa', pessoaController.atualizarPessoa);

app.listen(process.env.API_PORT, ()=>{
    console.log(`API rodando na porta ${process.env.API_PORT}`);
});