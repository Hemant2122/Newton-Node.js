const http = require("node:http");

// req => request
// res => response

const server = http.createServer((req, res) => {
    console.log("server is up and running and we can get response");

    const url = req.url;
    const method = req.method;

    if(url === "/"){
        if(method === "GET"){
            res.end("WELCOME TO HOME PAGE");
        }else{
            res.end("BAD REQUEST");
        }
        
    }else if(url === "/fitnes"){
        res.end("FITNES FREAK");
    }else if(url === "/about"){
        res.write("Contact: 626402503");
        res.write("\nEmail: abcd@gmail.com");
        res.end("\nFeel to connect"); 
    }else{
        res.end("\nNothing to see here");
    }
})

server.listen(8080, () => {
    console.log("server is listing fine", 8080);
});

/*
    res.end -> denotes the end of reply by the server to the client (and this is IMPORTANT) 
    otherwise the Client will infinitely load and load and load....

*/