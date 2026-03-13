const http = require('http');
const os = require('os');
const fs = require('fs');
// const server = http.createServer((request,response)=>{
//     const requestURL = request.url;
//     const requestMethod = request.method;

//     console.log(requestURL);
//     console.log(requestMethod);

//     if(requestURL === '/home'){
//         response.end("Home Page");
//     }
//     if(requestURL === '/users'){
//         response.end("List of Users");
//     }
//     if(requestURL === '/configSystem'){
//         response.end(`Free Memory ${os.freemem/1024/1024}`);
//     }
// })


const server = http.createServer((request,response)=>{
    const requestURL = request.url;
    const requestMethod = request.method;

    console.log(requestURL);
    console.log(requestMethod);

    fs.writeFile("log.txt", requestURL);
    if(fs.existsSync('log.txt')){
        fs.ap
    }

    if(requestURL === '/home'){
        response.end("Home Page");
    }
    if(requestURL === '/users'){
        response.end("List of Users");
    }
    if(requestURL === '/configSystem'){
        response.end(`Free Memory ${os.freemem/1024/1024}`);
    }

})

server.listen(3000);
