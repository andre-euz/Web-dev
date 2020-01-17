const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');


const app = express();

mongoose.connect('mongodb+srv://andreheuz:andreh123@cluster0-2v0rf.mongodb.net/week10?retryWrites=true&w=majority',  {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors()); // Acesso liberado à API de qualquer aplicação
app.use(express.json());
app.use(routes);

app.listen(3333);

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros:

// Query params: request.query (Filtros, ordenação, paginação...)
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

// MongoDB (Não-relacional)