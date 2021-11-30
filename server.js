const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/swiftnews'))

app.use('/*', (req, res) => {
    res.sendFile('index.html', { root: 'dist/swiftnews' })
})  

app.listen(process.env.PORT || 8080);