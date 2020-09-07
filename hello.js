const os = require('os');
const http = require('http');

let cnt = 0;

const server = http.createServer(
    function (req, res) {   //create web server
        if (req.url == '/') { //check the URL of the current request
            
            // set response header
            res.writeHead(200, { 'Content-Type': 'text/html' }); 
            
            // set response content    
            res.write(`Node Hello on ${os.hostname()} ${cnt++} \n`);
            res.end();
        
        }

        else
            res.end('Invalid Request!');
    
    });
    
server.listen(8000); // listen for any incoming requests at port 8000

console.log(`Server running at http://localhost:8000/`);
