# Node Task Manager

![](https://img.shields.io/badge/Node-green)

API Rest com funções de CRUD de tarefas com integração com banco MongoDb.
Este projeto foi criado com objetivo de estudar a ferramenta Node pra o desenvolvimento back-end.

## Instalação
É necessário criar um arquivo .env com a URI de conexão do seu banco MongoDb.
```sh
cd node-task-manager
npm install
npm start
```

## Rotas
```sh
/api/v1/tasks --> (GET) listar todas as tarefas
/api/v1/tasks --> (POST) registrar uma tarefa
/api/v1/tasks/{id} --> (GET) listar uma tarefa
/api/v1/tasks/{id} --> (DELETE) deletar uma tarefa
/api/v1/tasks/{id} --> (PATCH) alterar uma tarefa
```
