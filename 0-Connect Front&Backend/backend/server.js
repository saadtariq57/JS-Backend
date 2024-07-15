import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Server is serving')
})

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "1 joke",
            content: "This is a joke"
        },
        {
            id: 2,
            title: "2 joke",
            content: "This is a joke"
        },
        {
            id: 3,
            title: "3 joke",
            content: "This is a joke"
        },
        {
            id: 4,
            title: "4 joke",
            content: "This is a joke"
        },
        {
            id: 5,
            title: "5 joke",
            content: "This is a joke"
        }
    ]
    res.send(jokes)
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
})