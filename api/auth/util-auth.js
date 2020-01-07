const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = mongoose.model('User');

/**
 * Reads all registeredusers
 * 
 * @returns Array of all registered users
 * @param {*} name User name of user
 * @param {*} password Password of user
 */
exports.getAllUsers = async () => User.find();

/**
 * creates a new user in database
 * 
 * @param {*} name User name of user
 * @param {*} password Password of user
 */
exports.createUser = async (name, password) => {
  if (!name) throw Error('User must be provided');
  if (!password) throw Error('No password provided');

  const user = await User.findOne({ name });
  if (user) throw Error('User already exists');

  const hashedPassword = await bcrypt.hash(password, 10);
  new User({
    name,
    password: hashedPassword,
  }).save();

  return 'User created';
};

/**
 * login with user and password (needs to be passed) 
 * 
 * @param {*} name User name of user
 * @param {*} password Password of user
 */
exports.login = async (name, password) => {
  if (!name) throw Error('User must be provided');
  if (!password) throw Error('No password provided');

  const user = await User.findOne({ name });
  if (user == null) throw Error('User not authenticated');

  if (!await bcrypt.compare(password, user.password)) {
    throw Error('User not authenticated');
  }
  return 'User authenticated';
};
