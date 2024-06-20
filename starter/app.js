const express = require('express');
const {getAllTasks,getTaskById,createTask,deleteById,updateById} = require('./control/task')
const connect = require('./db/connect');
const tasks = require("./router/routes")


const app = express();

//universal middleware:
app.use(express.static('./public'));
app.use(express.json());


//routes:
app.use('/api/v1/tasks', tasks);


const port = process.env.PORT || 5000;
const start = async ()=> {
    try {
        await connect();
        app.listen(port, () =>
          console.log(`Server is listening on port ${port}...`)
        );
      } catch (error) {
        console.log(error);
      }
}

start();