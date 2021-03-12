'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async userlist() {
    const { ctx } = this;
    const res = await ctx.service.user.selectUser();
    // ctx.body = res
    ctx.helper.success(ctx, res);
  }

  async userposts() {
    const { ctx } = this;
    const res = await ctx.service.user.selectPosts();
    ctx.helper.success(ctx, res);
  }
}

module.exports = UserController;
