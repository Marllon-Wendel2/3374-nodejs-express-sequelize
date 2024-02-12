const Controller = require('./Controller.js');
const PessoaServices = require('../services/PessoaService.js');

const pessoaService = new PessoaServices();

class PessoaController extends Controller {
  constructor() {
    super(pessoaService);
  }

  async pegaMatriculasAtivas(req, res) {
    const { estudante_id } = req.params;
    try {
      const listaMatriculas = await pessoaService.pegaMatriculasAtivasPorEstudante(Number (estudante_id));
      return res.status(200).json(listaMatriculas);
    }catch (erro) {
      return res.status(500).json( {mensegem: 'Erro no registro'});
    }
  }

  async pegaTodasAsMatriculas(req, res) {
    const { estudante_id } = req.params;
    try {
      const listaMatriculas = await pessoaService.pegaTodasAsMatriculasPorEstudante(Number (estudante_id));
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