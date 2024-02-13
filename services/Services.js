const dataSouce = require('../models');

class Services {
  constructor(nomeDoModel) {
    this.model = nomeDoModel;
  }

  async pegaTodosOsRegistros(where = {}) {
    return dataSouce[this.model].findAll({where: {...where}} );
  }

  async pegaPorEscopo(escopo) {
    return dataSouce[this.model].scope(escopo).findAll();
  }

  async pegaUmRegistroPorId(id) {
    return dataSouce[this.model].findByPk(id);
  }

  async pegaUmRegistro(where) {
    return dataSouce[this.model].findOne( { where: { ...where } });
  }

  async pegaEContaRegistros(options) {
    return dataSouce[this.model].findAndCountAll({ ...options });
  }
  
  async criaRegistro(dadosDoRegistro) {
    return dataSouce[this.model].create(dadosDoRegistro);
  }

  async atualizaRegistro(dadosAtualizados, where) {
    const ListaRegistroAtualizado = dataSouce[this.model].update(dadosAtualizados, {
      where: { ...where }
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