require('dotenv').config();
const express = require('express');
const app = express();
const taskRoutes = require('./routes/taskRoutes');
const connect = require('./db/connect');
const notFound = require('./middleware/not-found');
const PORT = 5000 || process.env.PORT;

app.use(express.json());
app.use('/api/v1/tasks', taskRoutes);
app.use(notFound);

const start = async () => {
  try {
    await connect;
    await app.listen(PORT, console.log(`Listening from port ${PORT}...`));
  } catch (err) {
    console.log(err);
  }
};

start();
