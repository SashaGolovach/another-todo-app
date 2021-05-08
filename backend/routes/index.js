const express = require('express');

const todoController = require('../controllers');

const router = express.Router();

router.get('/todo', todoController.getTodoList);

router.post('/todo', todoController.postTodoItem);

router.delete('/todo', todoController.deleteTodoItem);

module.exports = router;
