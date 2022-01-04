import express, { Express } from 'express';
import { conectionDatabase } from './database';
import http from 'http';
import { Server as ServerIo, Socket } from 'socket.io';
import server from '../app';

export const initServer = (port: Number): { io: ServerIo; app: express.Application } => {
  const app = express();
  const httpServer = http.createServer(app);
  const io = new ServerIo(httpServer, {});
  return { io, app };
};
