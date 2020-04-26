const express = require ('express');
const router = express.Router();
const Post = require ('../models/Post');

// get back all the posts
router.get('/', async(req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);    
    }catch(err){
        res.json({message:err});
    }
});

// submit a post
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

// specific post
router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (err) {
        res.json({ message: err});
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

// update a post
router.patch('/:postId', async (req, res) => {
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

module.exports = router;