'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async find() {
    const user = await this.app.mysql.select('user');
    // const user = await this.ctx.db.query('select * from user')
    return user;
  }

  async selectUser() {
    return await this.ctx.model.User.findAll();
  }

  async selectPosts() {
    return await this.ctx.model.Posts.findAll();
  }
}

module.exports = UserService;
