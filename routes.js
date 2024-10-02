let cards = [
    {id: '1', name: 'first card', status: 'todo', priority: 5},
    {id: '2', name: 'second card', status: 'progress', priority: 6},
    {id: '3', name: 'third card', status: 'pending', priority: 8},
];

function routes(app) {

    app.get('/', (req, res) => {
        res.send('Hello World!')
    })

    app.get('/cards', (req, res) => {
        res.send(cards);
    })

    app.delete('/cards/:cardsId', (req, res) => {
        const cardsId = req.params.cardsId;
        cards = cards.filter(el => el.id !== cardsId);
        res.send(cards);
    })

    app.post('/cards', (req, res) => {
        const card = req.body;
        cards.push({id: Math.random().toString(), ...card})
        res.send('Cards created');
    })

    app.patch('/cards/:cardsId', (req, res) => {
        const cardsId = req.params.cardsId;
        const card = req.body;
        cards = cards.map(el => el.id === cardsId ? ({...card, id: el.id}) : el);
        res.send('Cards updated');
    })
}

module.exports = routes;