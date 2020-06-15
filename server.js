const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const config = require('./utils/config');
const messagesRouter = require('./routes/messages');
const publicPath = path.join(__dirname, 'client/build');
const app = express();

// Connect to MongoDB with Mongoose
mongoose
    .connect(config.MONGODB_URI, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("common"));

// Routers
app.use('/api/messages', messagesRouter);

// Serve static assets when in production
if(process.env.NODE_ENV === "production") {
    app.use(express.static(publicPath));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, publicPath, 'index.html'));
    });
}

// Start the server at the specified PORT
app.listen(config.PORT, () => 
    console.log(`Server running on port ${config.PORT}`)
)