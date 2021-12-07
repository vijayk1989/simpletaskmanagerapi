const mongoose = require('mongoose');
require('dotenv').config();
const URI = process.env.MONGODB_URI;

const connect = mongoose.connect(URI);

module.exports = connect;
