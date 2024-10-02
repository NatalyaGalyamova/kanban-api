const express = require('express');
const bodyParser = require('./bodyParser');
const routes = require('./routes');

const app = express()
const PORT = process.env.PORT || 5000

bodyParser(app);
routes(app);

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})

