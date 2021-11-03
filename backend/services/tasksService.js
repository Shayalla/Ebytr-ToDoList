const Joi = require('joi');
const tasksModel = require('../models/tasksModel');

const isValid = (task, done) => {
  const tasks = Joi.object({
    task: Joi.string().required(),
    done: Joi.string().required(),
  });
  const { message } = tasks.validate({ task, done }).error.details[0]
  return message;
}

const findAllTasks = async () => await tasksModel.findAll();

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