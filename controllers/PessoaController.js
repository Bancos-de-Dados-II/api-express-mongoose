const Pessoa = require('../models/pessoa');

const buscarPessoa = async (request, response) =>{
};

const getPessoas = async (request, response)=>{
};

const addPessoa = async (request, response) =>{
    const pessoa = new Pessoa(request.body);
    pessoa.save().then(()=>{
        response.status(200).send('Salvo com sucesso');
    }).catch(err=>{
        response.status(400).send('Falha ao salvar');
    });
};

const deletarPessoa = async (request, response)=>{
};

const atualizarPessoa = async(request, response)=>{
}

module.exports = {getPessoas, addPessoa, deletarPessoa, atualizarPessoa, buscarPessoa};