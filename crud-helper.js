// Connect to the database
require('dotenv').config();
require('./config/database');


const Fruit = require('./models/fruit')

let user, item, category, order, fruit;
let users, items, categories, orders, fruits;