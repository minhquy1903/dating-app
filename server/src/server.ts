import express from 'express';
import { Server } from 'socket.io';
import cors from 'cors';
import http from 'http';
import morgan from 'morgan';

import config from './config/config';
import router from './routers/index';
import mongoConnect from './config/mongo';
import WebSockets from './utils/WebSockets';

declare global {
  namespace NodeJS {
    interface Global {
      io: any;
    }
  }
}

const app: express.Application = express();

app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', router);
app.use('*', (req, res) => {
  return res.status(404).json({
    success: false,
    message: 'API endpoint doesnt exist',
  });
});

const server = http.createServer(app);

global.io = new Server(server);

global.io.on('connection', WebSockets.connection);

server.listen(config.server.port);

server.on('listening', () => {
  mongoConnect();
  console.log(`Listening on port:: http://localhost:${config.server.port}`);
});
