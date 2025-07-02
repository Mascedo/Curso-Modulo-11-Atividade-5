const mongoose = require('mongoose');

const Funcionario = mongoose.model('Funcionario', {
    nome: String,
    cargo: String,
    departamento: String
})

module.exports = Funcionario