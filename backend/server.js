const express = require('express');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 6969

const app = express();


app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("hi user")
})

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
})