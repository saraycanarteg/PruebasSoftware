const request = require('supertest');
const app = require('../src/app');

describe('User API', () => {
    //Prueba que GET devuelve una lista vacía inicialmente
    test('GET /api/users should return an empty array', async () => {
        const res = await request(app).get('/api/users');
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([]);
    });

     //Prueba que POST crea un nuevo usuario de forma correcta
    test ('POST /api/users should create a new user', async () => {
        const newUser = {name: 'Saray Canarte', email: 'sacanarte@espe.edu.ec'};
        const res = await request(app).post('/api/users').send(newUser);
        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty('id');
        expect(res.body.name).toBe('Saray Canarte');
    });

     //Prueba que POST rechace peticiones inválidas
    test ('POST /api/users should fail if data is missing', async () => {
        const res = await request(app).post('/api/users').send({name: 'Adriana'});
        expect(res.statusCode).toBe(400);
        expect(res.body).toHaveProperty('message', 'Name and email are required');
    });
});