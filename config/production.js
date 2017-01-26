module.exports = {
  port: process.env.PORT,
  mongo: {
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    conn: function() {
      return 'mongodb://'
        + (this.username && this.password
          ? this.username + ':' + this.password + '@' : '')
        + this.host
        + (this.port ? ':' + this.port : '')
        + '/' + this.database;
    }
  }
}
