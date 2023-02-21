import express from 'express';
import cors from 'cors';
import jsonServer from 'json-server';

const port = 4500;
const app = express();
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

app.use(cors);
app.use(express.json());

server.use(middlewares);
server.use(jsonServer.rewriter({
  '/api/*': '/$1'
}));
server.use(router);

server.listen(port, () => {
  console.log(`Server on port ${port}`);
});
