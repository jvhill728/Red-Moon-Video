import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Garcon! More Moet!');
});

app.listen(4000, () => console.log('Server is up'));