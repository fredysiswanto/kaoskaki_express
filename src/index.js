import 'dotenv/config';
import express from 'express';
import helmet from 'helmet';
import UserRouter from './routes/users.js';
import ProductsRouter from './routes/products.js';
import logRequestMiddleware from './middleware/logs.js';

const app = express();
const port = process.env.PORT || 9000;
// Create the connection pool. The pool-specific settings are the defaults

app.use(helmet());
app.use(logRequestMiddleware);
app.use(express.json());
app.use('/users', UserRouter);
app.use('/products', ProductsRouter);

// app.use((req, res, next) => {
//   res.status(404).send("Sorry can't find that!");
// });
// // custom error handler
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send('Something broke!');
// });

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
