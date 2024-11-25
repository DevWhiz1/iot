require('dotenv').config();
require('express-async-errors');

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser'); 
const connectDB = require('./db/connect');
const app = express();

// Import routes
const entityRoutes = require('./routes/entity.route');
const userRoutes=require("./routes/user")
const deviceRoutes=require("./routes/devices.route");
const automationRoutes=require("./routes/automation.route");
// Middleware setup
app.use(cors());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

// Use routes
app.use("/user", userRoutes);
app.use("/device", deviceRoutes);
app.use('/entity', entityRoutes);
app.use('/automation',automationRoutes);

// Error handling middleware
app.use((req, res, next) => {
    res.status(404).json({ message: 'Not Found' });
});

app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(500).json({ message: 'Internal Server Error' });
});

// Start server
const port = process.env.PORT || 3000;
const dbConnectionString = process.env.MONGO_URI || 'mongodb://localhost:27017/home';

const start = async () => {
    try {
        await connectDB(dbConnectionString);
        console.log('Connected to database');
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
    }
};

start();