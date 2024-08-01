const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // res.status(200).json({ message: "Hello From Homepage" });
    res.render('index',{title: 'Homepage',n:n});
});

module.exports = router;
