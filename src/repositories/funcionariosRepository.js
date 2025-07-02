const Funcionario = require('../models/funcionariosModel')


class funcionarioRepository {
    async mostrar(){
        return await Funcionario.find()
    }

    async criar(funcionario){
        return  await Funcionario.create(funcionario)
    }

    async atualizar(id, funcionario){
        return await Funcionario.findByIdAndUpdate(id, funcionario, {new:true})
    }

    async deletar(id){
        return await Funcionario.findByIdAndDelete(id)
    }
    
    }

module.exports = new funcionarioRepository();