require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts');

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

//routes
// app.get('/', (req, res) => {
//     res.json({ mssg: 'Welcome to the app!' })
// });
app.use('/api/workouts', workoutRoutes);

// conect to db
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log('listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error);
    })


