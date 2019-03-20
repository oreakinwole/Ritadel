const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json());

const meals = [
    { id: 1, name:'rice'},
    { id: 2, name:'plantain'},
    { id: 3, name:'yam'},
    { id: 4, name:'beans'},
    { id: 5, name:'indomie'}
];

app.get('/', (req, res) => {
    res.render('index', { title: 'My App', message: 'FUCK PUGGGGGGGGGGGGGGGGGGGGGGGGGGG'});
});

app.get('/api/meals', (req, res) => {
    res.send(meals);
});

app.post('/api/meals', (req, res) => {
    const meal = {
        id: meals.length + 1,
        name: req.body.name
    };
    meals.push(meal);
    res.send(meal);
});


app.get('/api/meals/:id', (req, res) => {
   const meal = meals.find(c => c.id === parseInt(req.params.id));
   if (!meal) res.status(404).send('Course not found.');
   res.send(meal);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
