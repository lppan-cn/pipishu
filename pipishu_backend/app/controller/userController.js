"use strict";

const Controller = require("egg").Controller;

class UserController extends Controller {

    //注册
    async regist() {
        let r = await this.ctx.service.userService.regist(参数);
        this.ctx.response.body = r;
    }
    //登录
    async login() {
        let r = await this.ctx.service.userService.login(参数);
        this.ctx.response.body = r;
    }
    //注销
    async logout() {
        let r = await this.ctx.service.userService.logout(参数);
        this.ctx.response.body = r;
    }
    //CR// 获取用户信息
    async getUserInf() {
        const { ctx } = this;
        ctx.body = await this.ctx.service.userService.getUserInf();
    }
    //ZY// 根据用户id获取用户信息
    async getAnuserInf() {
        const { ctx } = this;
        let user_id = this.ctx.request.query.user_id;
        ctx.body = await this.ctx.service.userService.getAnuserInf(user_id);
    }
}

module.exports = UserController;
