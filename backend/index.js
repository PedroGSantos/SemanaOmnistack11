const express = require('express');
const app = express();
app.get('/',(request, response) =>{
    return response.send('<h1>Hello word</h1>')
});
app.listen(8000);