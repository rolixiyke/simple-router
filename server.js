const http = require("http");
const { authors, books, } = require('./fixtures');

const port = 4000
const hostname = 'localhost'

console.log(authors)
console.log(books)


const requesttHandler = function(req, res) {
    
    switch(req.url){
        case "/books":
            res.writeHead(200)
            res.end(JSON.stringify(books))
            break
        case "/authors":
            res.writeHead(200)
            res.end(JSON.stringify(books))
            break
        default:
            res.writeHead(404)
            res.end("Invalid route")
            break
    }
  }

const server = http.createServer(requesttHandler)
server.listen(port, hostname, () =>{
    console.log(`server running successfully at http://${port}:${hostname}`)
})