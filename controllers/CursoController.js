const { Op } = require ('sequelize');
const Controller = require('./Controller.js');
const CursoService = require('../services/CursoService.js');

const cursoService = new CursoService();

class CursoController extends Controller {
  constructor() {
    super(cursoService);
  }
  
  async pegaCursos (req, res) {
    const { data_inicial, data_final } = req.query;
    const where = {};

    //se existirem os param, criar uma prop {}
    data_inicial || data_final ? where.data_inicio = {} : null;
    // se existir data inicial, adiciona a prop gte com o valor
    data_inicial ? where.data_inicio[Op.gte] = data_inicial : null;
    // se existir data final, idem
    data_final ? where.data_inicio[Op.lte] = data_final : null;

    try {
      const listaCursos = await cursoService.pegaTodosOsRegistros(where);
      return res.status(200).json(listaCursos);

    }catch (erro) {
      return res.status(500).json({mensagem: 'Erro na requisição'});
    }
  }
}


module.exports = CursoController;