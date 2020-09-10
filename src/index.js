const express = require('express');

const app = express();

app.use(express.json());


/*app.get('/',(request, response) => {
    return response.json({message : 'Hello GoStack'});
});
*/


/*
    Query Paramns: Filtros e paginação
    Route Paramns: Identificar recursos para atualizar ou deletar 
    Request Body: conteudo para criar ou editar um recurso  
*/
app.get('/projects',(request, response) => {

    const { title, owner} = request.query;
    console.log(title);
    console.log(owner);
    
    return response.json([
        'Get Projeto 1',
        'Get Projeto 2',
    ]);
});

app.post('/projects',(request, response) => {

    const { title,owner } = request.body;
    console.log(title);
    console.log(owner);

    return response.json([
        'Post Projeto 1',
        'Post Projeto 2',
        'Post Projeto 3',
    ]);
});

app.put('/projects/:id',(request, response) => {

    const { id } = request.params;
    console.log(id);

    return response.json([
        'Put Projeto 1',
        'Put Projeto 2',
        'Put Projeto 3',
    ]);    
});

app.listen(3333, () => {
    console.log(" 🚀 Backend started!");
});