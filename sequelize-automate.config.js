'use strict';

module.exports = {
  dbOptions: {
    database: 'test',
    username: 'root',
    password: '123456',
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    logging: false,
  },
  options: {
    type: 'egg',
    dir: 'app/model',
    tables: [ 'posts' ],
  },
};
