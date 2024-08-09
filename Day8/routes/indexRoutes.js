const express = require('express');
const router = express.Router();
const User = require('../models/userSchema');

router.post('/', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.get('/', (req, res) => {
        res.render('create');
        }
);