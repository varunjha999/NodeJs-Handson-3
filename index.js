
const express = require('express');

const app = express();

const middle = (req, res, next) => {
    console.log('Middleware works before giving the response');
    next();
}

const middle2 = (req, res) => {
    console.log('Middleware2');
}

app.use(middle);
app.use(middle2);

app.get('/login', (req, res) => {
    console.log("the response is coming after the verification of the middleware")
    res.send('Login page');
}
);

app.listen(7000, () =>{
    console.log('Server is running ............');
}
);





