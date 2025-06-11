const express = require('express');
const path = require('path');
const open = require('open').default;

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
    console.log('Servidor corriendo\nAbriendolo en el navegador');
    open('http://localhost:3000');
})