import mysql from 'mysql2';
const dbPool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  // waitForConnections: true,
  // connectionLimit: 10,
  // queueLimit: 0,
  // maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
  // idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
  // enableKeepAlive: true,
  // keepAliveInitialDelay: 0
});

export default dbPool.promise();
