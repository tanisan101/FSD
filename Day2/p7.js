const http=require('http');
const server= http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    if(req.url==='/home'){
        res.end("Welcome to Home Page");
    }
    else if(req.url==='/about'){
        res.end("This is About Page");
    }
    else if(req.url==='/contact'){
        res.end("Contact Us Page");
    }
    else
    {
         res.end("Page Not Found");
    }
     
})

server.listen(9000,()=>{
    console.log("Server is running on port 9000");
})