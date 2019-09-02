"use strict";
const process = require("child_process");
const Controller = require("egg").Controller;
class ScriptController extends Controller {
  async blog() {
    const { ctx } = this;
    const result = await new Promise((resolve, reject) => {
      process.exec(
        "cd /home/my_space_formal && git fetch --all && git reset --hard origin/master && git pull",
        function(error) {
          resolve(error);
        }
      );
    });
    ctx.body = result ? result : "博客代码已更新";
  }
  async pwd() {
    const { ctx } = this;
    const result = await new Promise((resolve, reject) => {
      process.exec(
        "cd /home/my_pwd_serve && git pull origin master && yarn stop && yarn start",
        function(error) {
          resolve(error);
        }
      );
    });
    ctx.body = result ? result : "我的密码代码已更新";
  }
}

module.exports = ScriptController;
