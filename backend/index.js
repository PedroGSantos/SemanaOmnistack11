const express = require('express');
const app = express();
app.use(express.json);

app.get('/users',(request, response) =>{
    const dados = request.query;
    console.log(dados);

    return response.send('<h1>Hello word</h1>');
});
app.listen(3333);