const http = require('http');

const server = http.createServer((req,res) => {
if(req.url === '/'){
    res.write('Welcome to our home page')
}
if(req.url === '/about'){
    res.write('Here is our short history')
}
res.write(`
    <h1>OOPs!</h1>
    <p> We can't seem to find the </p>
    <a href ="/"> back home</a>
    `)
})

server.listen(8000)



