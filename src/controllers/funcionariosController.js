const funcionariosService = require("../services/funcionariosService")


exports.mostrarFuncionarios = async (req, res) => {
    try{
        const funcionarios = await funcionariosService.mostrar()
        res.status(200).json(funcionarios)
    } catch (erro){
        res.status(500).json({erro: "Erro ao mostrar funcionarios", detalhes: erro.message})
    }
}  

exports.criarFuncionario = async (req, res) => {
    try{
        const {nome, cargo, departamento} = req.body
        const novoFuncionario = await funcionariosService.criar(nome, cargo, departamento)
        res.status(201).json(novoFuncionario)
    }catch(erro){
        res.status(500).json({erro: erro.message})
    }
}

exports.atualizarFuncionario = async (req, res) => {
    try{
        const {nome, cargo, departamento} = req.body
        const id = req.params.id   
        const novoFuncionario = await funcionariosService.atualizar(id, nome, cargo, departamento)
        res.status(201).json(novoFuncionario)
    }catch(erro){
        res.status(500).json({erro: erro.message})
    }
}

exports.deletarFuncionario = async (req, res) => {
    try{
        const id = req.params.id
        await funcionariosService.deletar(id)
        res.status(201).json("Funcionario removido!")
    }catch(erro){
        res.status(500).json({erro: erro.message})
    }
}
