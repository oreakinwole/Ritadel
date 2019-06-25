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
});