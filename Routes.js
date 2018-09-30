const Express           = require("express");
const Routes            = Express.Router();
const PaymentRoute      = require('./Payment/Payment.Route');
const UserRoute         = require('./Users/User.Route');
const ItemRoute         = require("./Item/Item.Route");

const employeeRoute = require('./Employee/Employee.Route')

Routes.use('/payments' , PaymentRoute);
Routes.use('/users' , UserRoute);
Routes.use('/item' , ItemRoute);
Routes.use('/employees', employeeRoute)
// Routes.use('/suppliers', new Route)
// Routes.use('/site-managers', employeeRoute)

module.exports = Routes;