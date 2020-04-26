const express = require ('express');
const router = express.Router();
const Post = require ('../models/Post');

// create a post  
router.post('/', async (req, res) => {
    const post = new Post({
        item: req.body.item,
        session: req.body.session,
        price: req.body.price
    });
    try{
    const savedPost = await post.save();
        res.json(savedPost);
    }catch(err){
        res.json({ message: err });
    }
});

// read/retrieve all posts  
router.get('/', async(req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);    
    }catch(err){
        res.json({message:err});
    }
});

// read/retrieve a specific post by postId
router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (err) {
        res.json({ message: err});
    }
});

// update a post, with item
router.patch('/:postId', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne(
            {_id: req.params.postId},
            { $set: { item: req.body.item } });
        res.json(updatedPost);
    }catch (err) {
        res.json({ message: err });
    }
});

// update a post 
router.put('/:postId', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne(
            {_id: req.params.postId},
            { $set: { item: req.body.item, 
                      session: req.body.session,
                      price: req.body.price}});
        res.json(updatedPost);
    }catch (err) {
        res.json({ message: err });
    }
});
// delete post
router.delete('/:postId', async (req, res) => {
    try {
        const removedPost = await Post.remove({_id: req.params.postId});
        res.json(removedPost);
    } catch (err) {
        res.json({ message: err});
    } 
});

module.exports = router;