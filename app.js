const express = require('express');
const app = express();
const PORT =3000;

app.get('/', (req, res) => {
    res.send('Welcome! This is my simple Node.js application tha I am making for my DevOps Assignment');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})

