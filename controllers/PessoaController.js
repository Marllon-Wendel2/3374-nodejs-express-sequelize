const Controller = require('./Controller.js');
const PessoaServices = require('../services/PessoaService.js');

const pessoaService = new PessoaServices();

class PessoaController extends Controller {
  constructor() {
    super(pessoaService);
  }

  async pegaMatriculas(req, res) {
    const { estudanteId } = req.params;
    try {
      const listaMatriculas = await pessoaService.pegaMatriculasPorEstudante(Number (estudanteId));
      return res.status(200).json(listaMatriculas);
    }catch (erro) {
      return res.status(500).json( {mensegem: 'Erro no registro'});
    }
  }

  async pegaTodasAsPessoas(req, res) {
    try {
      const listaTodasPessoas = await pessoaService.pegaRegistroPorEscopo();
      return res.status(200).json(listaTodasPessoas);
    } catch (erro) {
      return res.status(500).json( {mensegem: 'Erro no registro'});
    }
  }
}

module.exports = PessoaController;