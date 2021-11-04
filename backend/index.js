const express = require('express');
const bodyParser = require('body-parser');
const tasksControllers = require('./controllers/tasksController');
require('dotenv').config();

const app = express();

const { PORT } = process.env;
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Escutando na porta ${PORT}`);
});

app.route('/tasks/:id')
  .put(tasksControllers.updateTask)
  .delete(tasksControllers.deleteTask);

app.route('/tasks')
  .get(tasksControllers.findTasks)
  .post(tasksControllers.createTask);