var express = require('express');
var path = require('path');
var app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
                res.sendFile(path.join(__dirname + '/public/dashboard.html'));
});

app.get('/wedding', (req, res) => {
                res.sendFile(path.join(__dirname + '/public/wedding.html'));
});



app.get('/dashboard', (req, res) => {
                res.sendFile(path.join(__dirname + '/dashboard.html'));
});


var port = process.env.PORT || 3000;
app.listen(port, () => {
                console.log(`Echo running on port ${port}!`);
});
