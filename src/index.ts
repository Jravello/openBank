require('dotenv').config();
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import mainRouter from './v1/router/router';
import express, { json, RequestHandler, urlencoded, Express } from 'express';
import { corsOptions, KEY, PORT } from './envConfig';
import { Validator } from './interface/enum/validatorsJwt';
import * as http from 'http';
import { Server, Socket } from 'socket.io';
import { InfoApi } from './interface/infoApi';
import { DefaultEventsMap } from 'socket.io-client/build/typed-events';
import { isUndefined } from 'underscore';
import path from 'path';

const port: number = Number(PORT);
export const app = express();
const httpServer = http.createServer(app);
const io = new Server(httpServer, { path: '/socket', cors: corsOptions });
export const apis: InfoApi[] = [];

export const appInit = (app: Express) => {
  app.set(Validator.Key, KEY);
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'pug');
  app.use(json() as RequestHandler);
  app.use(urlencoded({ extended: true }) as RequestHandler);
  app.use(morgan('combined') as RequestHandler);
  app.use(cors(corsOptions));
  app.use(helmet() as RequestHandler);
  app.use(mainRouter);
};

appInit(app);
export const socketEvents = (io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap>) => {
  io.on('connection', (socket: Socket) => {
    console.log('Servicio Conectado =>', socket.id);

    socket.on('conectionAPI', (infoApi: InfoApi) => {
      if (isUndefined(infoApi.name)) {
        console.log('Error datos no estan en formato JSON');
      } else {
        console.log(`Nueva api conectada => ${infoApi.name}`);
        Object.assign(infoApi, { socketId: String(socket.id) });
        apis.push(infoApi);
      }
    });

    socket.on('connectDB', (infoApi: InfoApi) => {
      const apiFind = apis.findIndex((api) => api.id === infoApi.id);
      if (apiFind >= 0) {
        apis[apiFind].statusDB = true;
      }
    });

    socket.on('disconnectDB', (infoApi: InfoApi) => {
      const apiFind = apis.findIndex((api) => api.id === infoApi.id);
      if (apiFind >= 0) {
        apis[apiFind].statusDB = false;
      }
    });

    socket.on('disconnect', () => {
      let nameApi = '';
      const apiFind = apis.findIndex((api) => {
        if (api.socketId == String(socket.id)) {
          nameApi = api.name;
        }
        return api.socketId == String(socket.id);
      });
      if (apiFind >= 0) {
        apis.splice(apiFind, 1);

        socket.emit('disconnected');
        console.log('Servicio Desconectado => ', nameApi);
        console.log('Servicios restantes =>', apis);
      } else {
        console.log('No se encontro la api a desconectar');
        console.log('Servicios restantes =>', apis);
      }
    });
  });
};

socketEvents(io);

httpServer.listen(port, () => console.log(`Example app listening on port ${port}!`));
