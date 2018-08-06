const services = require('./service');
const users = require('./user.controller');
const messages = require('./message');
const projects = require('./project');
const settings = require('./settings');

module.exports = {
  services,
  users,
  messages,
  projects,
  settings,
};
