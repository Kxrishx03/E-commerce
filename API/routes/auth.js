const router = require("express").Router();
const { json } = require("express");
const User = require("../models/User");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

//REGISTER
router.post("/register", async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ Error: "Missing fields" });
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    // Username already taken
    const usernameExists = await User.findOne({ username });

    if (usernameExists) {
        return res.status(400).json({ Error: "Username already in use" });
    }

    const newUser = new User({ username, email, password: hash });

    try {
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

//LOGIN
router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ Error: "Missing fields" });
    }

    const user = await User.findOne({ username });

    if (!user) {
        return res.status(400).json({ Error: "User not found" });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
        return res.status(400).json({ Error: "Wrong password" });
    }
    
    const accessToken = jwt.sign(
        {
            id:user._id,
            isAdmin: user.isAdmin,
        },
        process.env.SECRET,
        { expiresIn:"5d"}
    )
    res.status(200).json({ username,accessToken });
});


module.exports = router;