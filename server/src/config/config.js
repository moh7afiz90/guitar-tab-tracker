module.exports = {
  port: process.env.PORT || 8801,
  db: {
    database: process.env.DB_NAME || 'tabtracker',
    user: process.env.DB_USER || 'tabtracker',
    passward: process.env.DB_PASS || 'tabtracker',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './tabtraker.sqlite'
    }
  },
  Auth: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
