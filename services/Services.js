const dataSouce = require('../models');

class Services {
  constructor(nomeDoModel) {
    this.model = nomeDoModel;
  }

  async pegaTodosOsRegistros() {
    return dataSouce[this.model].findAll();
  }

  async pegaPorEscopo(escopo) {
    return dataSouce[this.model].scope(escopo).findAll();
  }

  async pegaUmRegistroPorId(id) {
    return dataSouce[this.model].findByPk(id);
  }

  async criaRegistro(dadosDoNovoRegistro) {
    return dataSouce[this.model].create(dadosDoNovoRegistro);
  }

  async atualizaRegistro(dadosAtualizados, id) {
    const ListaRegistroAtualizado = dataSouce[this.model].update(dadosAtualizados, {
      where: { id: id }
    });
    if(ListaRegistroAtualizado[0] === 0) {
      return false;
    }
    return true;
  }

  async excluiRegistro(id) {
    return dataSouce[this.model].destroy({ where: { id: id } });
  }
}


module.exports = Services;