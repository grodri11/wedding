var express = require('express');
var path = require('path');
var app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
                res.sendFile(path.join(__dirname + '/public/wedding.html'));
});



var port = process.env.PORT || 3000;
app.listen(port, () => {
                console.log(`Wedding running on port ${port}!`);
});
