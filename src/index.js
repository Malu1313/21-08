const express = require("express"); //importar o express

//Define uma classe para organizar a lógica de aplicação
class AppController {
  constructor() {
    //Cria uma nova instância do Express dentro da classe
    this.express = express();
    //Chama o método middlewares para configurar os middlewares
    this.middlewares();
    //Chama o método routes para definir as rotas da Api
    this.routes();
  }
  middlewares(){
    //Permitir que a aplicação receba dados em formato JSON nas requisições
    this.express.use(express.json());
  }
  //Define as rotas da nossa API
  routes(){
    //Define uma rota GET para o caminho health
    this.express.get('/health/' , (req, res) => {
        res.send({nome:"Malu", idade:"16", CPF:"57134450899"});
    });//Essa rot é usada para verificar se a Api está OK
  }
}
//Exportando a instância de Express configurada, para que seja acessada em outros aquivos
module.exports = new AppController().express;