const posts = require('../models/Posts');

async function httpPostsGet(req, res, next) {
  try {
    const posts = await Posts.findAll();
    res.send(post);
  } catch (e) {
    console.log(`Error fetching all users from table`, e.message);
    res.status(400).send('Error connecting to db, please contact admin');
  }
}
async function httpGetPostsById(req, res, next) {
  const id = req.params.id;
  try {
    if (!id) throw Error('id is missing');
    const post = await Posts.findOne({
      where: {
        id: id,
      },
    });
    if (!post) throw Error('no post found with that id');
    return res.status(200).json(post);
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
}
async function httpCreatePosts(req, res, next) {
  try {
    const newPosts = await Posts.create(req.body);
    console.log('New post created : ID = ' + newPosts.id);
    return res.status(200).json(newPosts);
  } catch (e) {
    console.log(e);
    return res.status(400).send(`Could not create new user with params given`);
  }
}
async function httpDeletePosts(req, res, next) {
  const id = req.params.id;
  try {
    if (!id) throw Error({ message: 'No id present' });
    const deletedPosts = await Posts.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).json(deletedPosts);
  } catch (e) {
    console.log(e.message);
    return res.status(400).json(e.message);
  }
}
async function httpUpdatePosts(req, res, next) {
  const id = req.params.id;
  try {
    if (!id) throw Error({ message: 'No id present' });
    await User.update(req.body, {
      where: {
        id: id,
      },
    });
    const updatedPosts = await Posts.findOne({
      where: {
        id,
      },
    });
    res.status(200).json(updatedPosts);
  } catch (e) {
    console.log(e.message);
    res.status(400).end();
  }
}

module.exports = {
  httpPostsGet,
  httpGetPostsById,
  httpCreatePosts,
  httpDeletePosts,
  httpUpdatePosts,
};
