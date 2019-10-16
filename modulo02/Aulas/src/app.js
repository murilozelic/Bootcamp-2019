import express from 'express';
import routes from './routes';

class App {
  // Método chamada sempre que a classe é instanciada
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;