const express = require('express');
const router = express.Router();
const User = require('../../models/User');

router.get('/test', (req, res) => res.json({ msg: 'User Works' }));

router.post('/register', (req, res) => {
    User.findOne({ email: req.body.email })
});

module.exports = router;