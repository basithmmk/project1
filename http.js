const http = require('http');
const server= http.createServer((req,res)=>{
    if(req.url ==='/'){
res.end('welcomenjkj to kournbby page')
    }
    if(req.url === '/about') {
        res.end('here is our history')
        
    }
    res.end(`<h1> page not available</h1>
    <a href='/'>back to home</a>`)
})
server.listen(5000)