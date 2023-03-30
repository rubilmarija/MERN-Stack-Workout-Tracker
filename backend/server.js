require('dotenv').config();

const express = require('express');
const workoutRoutes = require('./routes/workouts.js');

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

// listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening on port 4000', process.env.PORT)
});
