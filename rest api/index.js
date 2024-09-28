// const express = require('express')

// const app = express()
// const PORT = 8000

// //Routs
// app.listen(PORT,()=>console.log(`Server Started at PORT: ${PORT}`))

const http = require('http')
const PORT = 8000

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.write("Jay Swaminarayan\n");
        res.write("\nYou are on the home page\n");
        res.end(); 
    } 
    else if(req.url === '/another'){
        res.write("Jay Swaminarayan\n");
        res.write("\nYou are in another rougt\n");
        res.end();
    }
    else{
        res.write("Jay Swaminarayan\n");
        res.write("\ni am very happy that this run on web site\n");
        res.end();
    }
})

server.listen(PORT, () => console.log(`seerver started at PORT: ${PORT}`))