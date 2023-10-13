module.exports = {
  host: process.env.DATABASE_HOST || '127.0.0.1',
  username: process.env.DATABASE_USERNAME || 'root',
  password: process.env.DATABASE_PASSWORD,
  db: process.env.DATABASE_NAME,
  dialect: 'mysql',
  pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
  }
};