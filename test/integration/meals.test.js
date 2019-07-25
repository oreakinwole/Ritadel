const {Meal} = require('../../models/meal');
const request = require('supertest');
let server;


describe('/api/meals', () => {

    beforeEach(() => { server = require('../../app'); })
    afterEach(async () => { 
        server.close();
       await Meal.remove({}); 
    });



    describe('GET/', () => {
        it('Should return all the meals in the base', async () => {
            await Meal.collection.insertMany([
                { name: 'meal1' },
                { name: 'meal2' },
            ]);
           const res = await request(server).get('/api/meals');
           expect(res.status).toBe(200);
           expect(res.body.length).toBe(2);
           expect(res.body.some(g => g.name === 'meal1')).toBeTruthy();
           expect(res.body.some(g => g.name === 'meal2')).toBeTruthy();
        });
    });

    describe('GET /:id', () => {
        it('should return a meal if valid ID is passed', async () => {
            const myMeal = new Meal({ name: 'fufu', price: 400 });
            await myMeal.save();

         const result = await request(server).get('/api/meals/' + myMeal._id);

            expect(result.status).toBe(200);
            expect(result.body).toHaveProperty('name', myMeal.name);

        });
    });

    describe('POST', () => {
        it('should return a 401 if client is not logged in', async () => {
          const newEat = await request(server).post('/api/meals').send( { name:'Amala', price:700 });
        expect(newEat.status).toBe(401);
        });
    });
});