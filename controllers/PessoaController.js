const Pessoa = require('../models/pessoa');

const buscarPessoa = async (request, response) =>{
    const pessoas = await Pessoa.find({email: request.params.email},{__v:false});
    if(pessoas.length > 0){
        response.status(200).send(pessoas);
    }else{
        response.status(400).send('Usuário não encontrado');
    }
};

const getPessoas = async (request, response)=>{
    const pessoas = await Pessoa.find({},{_id: false, nome:true, email:true});
    response.status(200).send(pessoas);
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
    const result = await Pessoa.deleteOne({email: request.params.email});
    if(result.deletedCount > 0){
        response.status(200).send('Removido com sucesso!');
    }else{
        response.status(400).send('Usuário não encontrado');
    }
};

const atualizarPessoa = async(request, response)=>{
    const result = await Pessoa.updateOne({email: request.body.email},{$set:{nome: request.body.nome}});

    if(result.modifiedCount>0){
        response.status(200).send('Atualizado com sucesso');
    }else{
        response.status(400).send('Usuário não encontrado');
    }

}

module.exports = {getPessoas, addPessoa, deletarPessoa, atualizarPessoa, buscarPessoa};