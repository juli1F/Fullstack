const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
    nome: {type: String , require:true },
    email: {type: String , require: true, unique :true},
    telefone: {type: String, default:''},
    login : {type: String , require: true, unique :true},
    senha: {type: String , require:true }
}, {timestamps: true});

module.exports = mongoose.model('Usuario', UsuarioSchema)