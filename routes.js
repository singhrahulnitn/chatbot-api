'use strict';

let router = require('express').Router();
// import { dialogflow } from "./dialogflowTasks";

// Middleware
let middleware = require('./controllers/middleware');
router.use(middleware.doSomethingInteresting);

// Tasks
let dialogflowTasks = require('./dialogflowTasks');
let tasks = require('./controllers/tasks');
router.get('/tasks', tasks.findAll);
router.post('/buggyroute', tasks.buggyRoute);
router.post('/addIntent', dialogflowTasks.addIntent);
router.get('/getIntents', dialogflowTasks.getIntents);
router.post('/deleteIntent', dialogflowTasks.deleteIntent);

// Error Handling
let errors = require('./controllers/errors');
router.use(errors.errorHandler);

// Request was not picked up by a route, send 404
router.use(errors.nullRoute);

// Export the router
module.exports = router;
