const express = require('express');

const app = express();

/*app.get('/',(request, response) => {
    return response.json({message : 'Hello GoStack'});
});
*/

app.get('/projects',(request, response) => {
    return response.json([
        'Get Projeto 1',
        'Get Projeto 2',
    ]);
});

app.post('/projects',(request, response) => {
    return response.json([
        'Post Projeto 1',
        'Post Projeto 2',
        'Post Projeto 3',
    ]);

app.put('/projects/:id',(request, response) => {
    return response.json([
        'Put Projeto 1',
        'Put Projeto 2',
        'Put Projeto 3',
    ]);    
});

app.listen(3333, () => {
    console.log(" 🚀 Backend started!");
});