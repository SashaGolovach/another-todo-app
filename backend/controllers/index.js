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

// exports.postEditProduct = (req, res, next) => {
//   const id = req.body.id;
//   const title = req.body.title;
//   const imgUrl = req.body.imgUrl;
//   const price = req.body.price;
//   const description = req.body.description;

//   Product.findById(id)
//     .then(product => {
//       product.title = title;
//       product.price = price;
//       product.imgUrl = imgUrl;
//       product.description = description;

//       return product.save();
//     })
//     .then(() => res.redirect('/'))
//     .catch(err => console.log(err));
// };

exports.deleteTodoItem = (req, res, next) => {
  const { Id } = req.body;

  Todo.findByIdAndDelete(Id)
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
};
