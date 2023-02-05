const User = require('../models/users');

async function httpUsersGet(req, res, next) {
  try {
    const users = await user.findAll();
    res.send(users);
  } catch (e) {
    console.log(`Error fetching all users from table`, e.message);
    res.status(400).send('Error connecting to db, please contact admin');
  }
}
async function httpGetUserById(req, res, next) {
  const id = req.params.id;
  try {
    if (!id) throw Error('id is missing');
    const user = await User.findOne({
      where: {
        id: id,
      },
    });
    if (!user) throw Error('no post found with that id');
    return res.status(200).json(user);
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
}
async function httpCreateUser(req, res, next) {
  try {
    const newUser = await User.create(req.body);
    console.log('New user created : ID = ' + newUser.id);
    return res.status(200).json(newUser);
  } catch (e) {
    console.log(e);
    return res.status(400).send(`Could not create new user with params given`);
  }
}
async function httpDeleteUser(req, res, next) {
  const id = req.params.id;
  try {
    if (!id) throw Error({ message: 'No id present' });
    const deletedUser = await User.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).json(deletedUser);
  } catch (e) {
    console.log(e.message);
    return res.status(400).json(e.message);
  }
}
async function httpUpdateUser(req, res, next) {
  const id = req.params.id;
  try {
    if (!id) throw Error({ message: 'No id present' });
    await User.update(req.body, {
      where: {
        id: id,
      },
    });
    const updatedUser = await User.findOne({
      where: {
        id,
      },
    });
    res.status(200).json(updatedUser);
  } catch (e) {
    console.log(e.message);
    res.status(400).end();
  }
}

module.exports = {
  httpUsersGet,
  httpGetUserById,
  httpCreateUser,
  httpDeleteUser,
  httpUpdateUser,
};
