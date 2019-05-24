const User = require('./model');

exports.find = async name => User.find({ username: name });

exports.read = async () => User.find();

exports.create = async ({ data = {} } = {}) => User.create(data);

