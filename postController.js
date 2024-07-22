const Post = require('../models/postModel');

const createPost = async (req, res) => {
    const { title, body, author } = req.body;

    try {
        const newPost = new Post({
            title,
            body,
            author,
        });

        const post = await newPost.save();
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate('comments');
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createPost,
    getPosts,
};
