const express = require('express');
const app = express();
const port = 5600
require('dotenv').config()
app.listen(port, () => {
    console.log('Server listening on 5600')
});
