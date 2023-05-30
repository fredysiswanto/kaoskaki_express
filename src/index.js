import express from 'express';
import UserRouter from './routes/users.js';
import logRequestMiddleware from './middleware/logs.js';
const app = express();
const port = 9000;

app.use(logRequestMiddleware);
app.use(express.json());
app.use('/users', UserRouter);

app.use('/', (req, res) => {
  res.send('home');
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
