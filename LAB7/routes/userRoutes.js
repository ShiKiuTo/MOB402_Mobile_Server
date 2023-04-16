const express = require('express');
const userModel = require('../models/user');
const app = express();

//add data
app.post('/user', async (req, res) => {
    try {
        const u = new userModel(req.body);
        await u.save();
        res.send(u);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'An error occurred while creating the user', error });
    }
});

//getAll
app.get('/list', async(req, res) => {
    const users = await userModel.find({});
    try {
        res.send(users);
    } catch (error){
        res.status(500).send(error);
    }
});

module.exports = app;