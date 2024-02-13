const Controller = require('./Controller.js');
const MatriculaService = require('../services/MatriculaService.js');

const matriculaService = new MatriculaService();

class MatriculaController extends Controller {
  constructor() {
    super(matriculaService);
  }

  async pegaMatriculaPorEstudante(req, res) {
    const { estudante_id } = req.params;
   

    try{
      const listaMatriculaPorEstudante = await matriculaService.pegaEContaRegistros({
        estudante_id: Number(estudante_id),
        status: 'matriculado'
      });
      return res.status(200).json(listaMatriculaPorEstudante);
    } catch(erro) {
      res.status(500).json({mensage: 'Erro na requisição'});
    }
  }
}

module.exports = MatriculaController;