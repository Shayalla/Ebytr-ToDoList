const Joi = require('joi');
const tasksModel = require('../models/tasksModel');

const isValid = (task, done) => {
  const tasks = Joi.object({
    task: Joi.string().required(),
    done: Joi.string().required(),
  });
  const { error } = tasks.validate({ task, done })
  return error;
}

const findAllTasks = async () => {
  const tasks = await tasksModel.findAll();
  return { tasks };
};

const createTask = async (task, done) => {
  const err = await isValid(task, done);
  if (err) return { err, error: true };

  await tasksModel.addTasks(task, done);
  return { task, done };
};

const updateTask = async (id, task, done) => {
  const err = await isValid(task, done);
  if (err) return { err, error: true };

  await tasksModel.updateTask(id, task, done);
  return { task, done };
};

module.exports = {
  createTask,
  findAllTasks,
  updateTask,
}