const Sequelize = require('sequelize');
const database = require('../database/db');

const Pessoa = database.define('pessoa',{
    id:{
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
});

module.exports = Pessoa;