module.exports = {
  port: process.env.PORT || 3000,
  mongo: {
    host: 'localhost',
    username: '',
    password: '',
    port: '',
    database: 'users-db',
    generateConnStr: function() {
      return 'mongodb://'
        + (this.username && this.password
          ? this.username + ':' + this.password + '@' : '')
        + this.host
        + (this.port ? ':' + this.port : '')
        + '/' + this.database;
    }
  }
}
