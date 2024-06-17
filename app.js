const express = require('express');
const app = express();
const PORT = 5000;
const mongoose = require('mongoose');


app.use(express.json());
app.use(express.static('public'));

// mongoDB connect
mongoose.connect(`mongodb+srv://nikitarich888:N2vyNgGJqkjmPoXS@cluster0.mtcisa7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    .then(() => {
        console.log(`Connect to mongo DB`);
    })
const Excuse = mongoose.model('Excuse', { avtor: String, mesexcuse: String });



// posts
app.post('/add-excuse', async (req, res) => {
    try {
        const { avtor } = req.body;
        const { mesexcuse } = req.body;
        const excuse = new Excuse({ avtor, mesexcuse });
        await excuse.save();
        console.log('Add new excuse');
        res.status(201).json(excuse);
    } catch (err) {
        res.status(500).json({ message: err });
    }
});



// listen
app.listen(PORT, () => {
    console.log(`Server work on port: ${PORT}`);
})