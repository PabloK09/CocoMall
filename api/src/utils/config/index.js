require('dotenv').config();

module.exports = {
<<<<<<< HEAD
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD ,
    DB_HOST: process.env.DB_HOST ,
    DB_NAME: process.env.DB_NAME ,
    PORT: process.env.PORT,
    PUBLIC_KEY: process.env.PUBLIC_KEY,
    SECRET_KEY: process.env.SECRET_KEY
}
=======
  DB_USER: process.env.DB_USER || 'postgres',
  DB_PASSWORD: process.env.DB_PASSWORD || 'romilinda0100',
  DB_HOST: process.env.DB_HOST || 'localhost',
  DB_NAME: process.env.DB_NAME || 'cocomall',
  PORT: process.env.PORT || '3001',
};
>>>>>>> 243185e5da69a5b0ec64d7552c0d767579e0c863
