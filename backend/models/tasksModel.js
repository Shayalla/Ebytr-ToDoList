const connection = require('./connection');
const { ObjectId } = require('mongodb');

const findAll = async () => connection()
  .then((db) => db.collection('task').find().toArray());

const addTasks = async (task, done) => connection()
  .then((db) => db.collection('task').insertOne({ task, done }));

const updateTask = async (id, tasks, done) => connection()
  .then((db) => db.collection('tasks').updateOne({ _id: ObjectId(id) }, { $set: { tasks, done } }));

const deleteTask = async (id) => connection()
  .then((db) => db.collection('tasks').deleteOne({ _id: ObjectId(id) }));

module.exports = {
  findAll,
  addTasks,
  updateTask,
  deleteTask,
};