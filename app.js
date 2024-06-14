const express = require('express');
const app = express();
const PORT = 5000;
const mongoose = require('mongoose');


app.use(express.json());
app.use(express.static('public'));


app.listen(PORT, () => {
    console.log(`Server work on port: ${PORT}`);
})