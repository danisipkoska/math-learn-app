const express = require('express');
const path = require('path');
const app = express();



app.use('/', express.static(path.join(__dirname, '../client')));

app.listen(4200, () => console.log('Shema app listening on port 4200!'));