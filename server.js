import jsonServer from 'json-server';

const port = 4500;
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.rewriter({
  '/api/*': '/$1'
}));
server.use(router);

server.listen(port, () => {
  console.log(`Server on port ${port}`);
});
