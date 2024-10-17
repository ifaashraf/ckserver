// importing json-server library
const jsonServer=require('json-server')

// importing server instance
const ckServer=jsonServer.create()

// getting default middlewares
const middleware=jsonServer.defaults()
// setting routes for resources
const routes=jsonServer.router('db.json')


// configuring server
ckServer.use(middleware)
ckServer.use(routes)

const PORT=3000 || process.env.PORT

ckServer.listen(PORT,()=>{
    console.log('Server Running At:'+PORT)
})
