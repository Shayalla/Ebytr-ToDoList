const { ObjectId } = require('mongodb');
const connection = require('./connection');

const findAll = async () => connection()
  .then((db) => db.collection('task').find().toArray());

const findById = async (id) => connection()
  .then((db) => db.collection('task').find({ _id: ObjectId(id) }).toArray());

const addTasks = async (task, status) => connection()
  .then((db) => db.collection('task').insertOne({ task, status }));

const updateTask = async (id, tasks, status) => connection()
  .then((db) => db.collection('tasks')
    .updateOne({ _id: ObjectId(id) }, { $set: { tasks, status } }));

const deleteTask = async (id) => connection()
  .then((db) => db.collection('tasks').deleteOne({ _id: ObjectId(id) }));

module.exports = {
  findAll,
  findById,
  addTasks,
  updateTask,
  deleteTask,
};