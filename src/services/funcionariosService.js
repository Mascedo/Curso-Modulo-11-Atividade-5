const funcionariosRepository = require("../repositories/funcionariosRepository")

class funcionariosService{

    async mostrar(){
        return await funcionariosRepository.mostrar()
    }

    async criar(nome, cargo, departamento){
        if(!(nome&&cargo&&departamento)){
            throw new Error("Todos os campos são necessarios!")
        }

        const novoFuncionario = ({nome, cargo, departamento})

        return await funcionariosRepository.criar(novoFuncionario)
    }

    async atualizar(id, nome, cargo, departamento){
        if(!(id&&nome&&cargo&&departamento)){
            throw new Error("Todos os campos são necessarios!")
        }

        const dadosAtualizados = ({nome, cargo, departamento})

        return await funcionariosRepository.atualizar(id, dadosAtualizados)
    }

    async deletar(id){
        if(!(id)){
            throw new Error("Sem id de remoção!")
        }

        return await funcionariosRepository.deletar(id)
    }

}

module.exports = new funcionariosService()