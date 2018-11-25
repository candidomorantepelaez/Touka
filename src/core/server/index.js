const routes = require("./../../../api");
const ramda = require("ramda");
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router({});
const middlewares = jsonServer.defaults();

server.use(middlewares);

console.log(routes);

const createRoute = route => {
    console.log(route.path);
    server[route.method](route.path, (req, res) => {
        res.jsonp(route.response);
    });
}

ramda.forEach(createRoute, routes);
  
server.use(router)

server.listen(8080, () => {
  console.log('JSON Server is running')
})