//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/Front-end'));

app.get('/*', (req, res) =>
    res.sendFile(path.join(__dirname + '/dist/Front-end/index.html')),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);

// const express = require('express');

// var app = express();
// app.use(express.static('./dist/Front-end'));

// app.get('/*', function(req, res) {
//   res.sendFile('index.html', {root: 'dist/Front-end/'});
// });

// app.listen(process.env.PORT || 8080);