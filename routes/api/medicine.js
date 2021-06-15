const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const Medicine = require('../../models/Bookmark');
const User = require('../../models/User');
const checkObjectId = require('../../middleware/checkObjectId');

// @route    POST api/bookmarks
// @desc     Create a bookmark
// @access   Private
router.post(
    '/',
    [
        check('title', 'Title is required').notEmpty(),
        check('url', 'Url is required').notEmpty(),
    ]
    ,
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const newMedicine = new Medicine(req.body);
            newBookmark.user = req.params.userId;
            const bookmark = await newBookmark.save();

            res.json(bookmark);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    }
);

// @route    GET api/bookmarks
// @desc     Get all bookmarks
// @access   Private
router.get('/', async (req, res) => {
    try {
        const bookmarks = await Bookmark.find();
        res.json(bookmarks);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route    GET api/bookmarks/:bookmarkId
// @desc     Get post by ID
// @access   Private
router.get('/:bookmarkId', checkObjectId('bookmarkId'), async (req, res) => {
    try {
        const bookmark = await Bookmark.findById(req.params.bookmarkId);

        if (!bookmark) {
            return res.status(404).json({ msg: 'Post not found' });
        }
        res.json(bookmark);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route    DELETE api/posts/:id
// @desc     Delete a post
// @access   Private
router.delete('/:bookmarkId', [checkObjectId('bookmarkId')], async (req, res) => {
    try {
        const bookmark = await Bookmark.findById(req.params.bookmarkId);

        if (!bookmark) {
            return res.status(404).json({ msg: 'Bookmark not found' });
        }

        /* // Check user
        if (post.user.toString() !== req.user.id) {
          return res.status(401).json({ msg: 'User not authorized' });
        } */

        await bookmark.remove();

        res.json({ msg: 'Bookmark removed' });
    } catch (err) {
        console.error(err.message);

        res.status(500).send('Server Error');
    }
});





module.exports = router;
