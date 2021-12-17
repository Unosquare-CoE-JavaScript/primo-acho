process.env.UV_THREADPOOL_SIZE = 1;
const cluster = require('cluster');

if(cluster.isMaster) {
    cluster.fork();
    cluster.fork();
} else {
    const crypto = require('crypto');
    const express = require('express');
//this is a child, 
const app = express();


app.get('/', (req, res) => {
    crypto.pbkdf2('a','b',100000, 512, 'sha512', () => {
        res.send('hi there');
    });
})

app.get('/fast', (req, res) => {
    res.send('This was fast')
})

app.listen(3000);

}