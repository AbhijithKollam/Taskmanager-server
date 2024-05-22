const jsonServer = require('json-server')

const taskServer = jsonServer.create()

const router = jsonServer.router('db.json')

const middleware = jsonServer.defaults();

taskServer.use(middleware)
taskServer.use(router)

const port = 5000

taskServer.listen(port,()=>{
    console.log(`server is up and running in port ${port}`);
})