const Todo = require('../models');

exports.getTodoList = (req, res, next) => {
  Todo.find({}, (_, todos) =>
    res.send(todos.map(({ _id, Text, IsDone }) => ({ Id: _id, Text, IsDone })))
  );
};

exports.postTodoItem = (req, res, next) => {
  const Text = req.body.Text;

  const todo = new Todo({
    Text,
    IsDone: false,
  });

  todo
    .save()
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
};

exports.deleteTodoItem = (req, res, next) => {

  Todo.findByIdAndDelete(req.params.id)
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
};
