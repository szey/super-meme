// Create web server using express
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
// Create express app
const app = express();
// Setup server port
const port = process.env.PORT || 5000;
// Configure bodyparser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));
// Define default route
app.get('/', function (req, res) {
    return res.send({ error: true, message: 'hello' })
});
// Require comments routes
const commentsRoutes = require('./src/routes/comments.routes')
// using as middleware
app.use('/api/v1/comments', commentsRoutes)
// listen for requests
app.listen(port, function () {
    console.log(`Server is listening on port ${port}`);
});
