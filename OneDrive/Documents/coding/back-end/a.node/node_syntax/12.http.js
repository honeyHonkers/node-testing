//http module
const http = require('http')

const server = http.createServer((req, res)=>{ //req - incoming request || res - response is what we send back
    if(req.url === '/'){
        res.end('this is the home page')
    }
    if(req.url === '/about'){
        res.end('this is the about page')
    }
    res.end(`
        <h1>sorry this page doesnt exists</h1>
        <a href="/">back home<a>
    `)
    res.write('welcome to the homepage') //response to someone accessing our page
    res.end()
})
server.listen(5000)//the server port 