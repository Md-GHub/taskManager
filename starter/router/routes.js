const express = require('express');
const router = express.Router();
const {getAllTasks,getTaskById,createTask,deleteById,updateById} = require('../control/task')


/*
Designing Routing:

/api/v1/tasks         -   get data , post data;
/api/v1/tasks/:id     -   get dataBy id , delete data , patch data

*/

router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getTaskById).patch(updateById).delete(deleteById);


module.exports = router;