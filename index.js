require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());
const pessoaController = require('./controllers/PessoaController');

app.get('/', pessoaController.sincronizar);

app.get('/pessoas', pessoaController.getPessoas);

app.get('/pessoas/:email', pessoaController.buscarPessoa);

app.post('/pessoas', pessoaController.addPessoa);

app.delete('/pessoas/:email', pessoaController.deletarPessoa);

app.put('/pessoas', pessoaController.atualizarPessoa);

app.listen(process.env.API_PORT, ()=>{
    console.log(`API rodando na porta ${process.env.API_PORT}`);
});