const express = require('express');
const app = express();
const port = 8001;
app.get('/', (req, res) => {
    res.send('Hello World, from express');
});
app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))