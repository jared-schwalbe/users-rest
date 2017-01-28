module.exports = {
  port: 443,
  db: {
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
    name: process.env.DB_NAME,
    secret: process.env.DB_SECRET
  },
  secret: process.env.SECRET
}
