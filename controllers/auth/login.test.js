
// const request = require('supertest')
//   const app = require('../../server')
//   describe('test login ', () => {
//     it('should login', async () => {
//       const res = await request(app)
//         .post('/api/login')
//         .send({
//           email: "ant@vestibul.co",
//           password: 123456,
//         })
//       expect(res.statusCode).toEqual(201);
//       expect( typeof res.body.token).toBe("string");
//       expect(res.body.user).toMatchObject({email: "ant@vestibul.co", subscription: "starter"})
//     })
//   })