const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/userRoutes');
const url = "mongodb+srv://Admin_IT:KTa9WeC0LoeWrbb3@thangit.ky8asol.mongodb.net/dbUserManagerPolyDN?retryWrites=true&w=majority"
const app = express();
app.use(express.json());

mongoose.connect(url,{useUnifiedTopology:true, useNewUrlParser:true});

app.use(userRouter);
app.listen(8080, () => {console.log('server is running');
})