class Controller {
  constructor (entidadeService) {
    this.entidadeService = entidadeService;
  }

  async pegaTodos(req, res) {
    try {
      const listaDeRegistro = await this.entidadeService.pegaTodosOsRegistros();
      return res.status(200).json(listaDeRegistro);
    }catch (erro) {
      //dsf
    }
  }

  async criaRegistro(req, res) {
    const dadosDoNovoRegistro = req.body;
    try {
      const novoRegistro = await this.entidadeService.criaRegistro(dadosDoNovoRegistro);
      return res.status(200).json(novoRegistro);
    } catch (erro) {
      res.status(400).json({mensagem : 'Erro ao cadastrar'});
    }
  }

  async pegaPorId(req, res) {
    const { id } = req.params;
    const umRegistro = await this.entidadeService.pegaUmRegistroPorId(Number(id));
    return res.status(200).json(umRegistro);
  }

  async atualiza(req, res) {
    const { id } = req.params;
    const dadosAtualizados = req.body;
    try {
      const foiAtualizado = await this.entidadeService.atualizaRegistro(dadosAtualizados, Number(id));
      if(!foiAtualizado) {
        return res.status(400).json({mensagem: 'registro não foi atualizado'});
      }
      return res.status(200).json({mensagem:'Registro atualizado'});
    } catch (erro) {
      //erro
    }
  }

  async exclui(req, res) {
    const { id } = req.params;
    try {
      await this.entidadeService.excluiRegistro(Number(id));
      return res.status(200).json({ mensagem: `id ${id} deletado` });


    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = Controller;