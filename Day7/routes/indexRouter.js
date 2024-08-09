const express = require('express');
const router = express.Router();



let user=[{name:"abhishek",age:21,college:"TiT"},{name:"muskan",age:20,college:"TiT"},{name:"nitesh",age:25,college:"TiT"}]

router.get('/', (req, res) => {
    // res.status(200).json({ message: "Hello From Homepage" });
    res.render("index", { title: "My Page Title",user: user});
});

module.exports = router;
