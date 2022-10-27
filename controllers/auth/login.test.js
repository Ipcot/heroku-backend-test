const mongoose = require("mongoose");
const request = require("supertest");
require("dotenv").config();

const app = require("../../app.js")
const {User} = require("../../models/user");

const {DB_TEST_HOST, PORT} = process.env;

describe("test auth routes", () => {
  let server;
  beforeAll(() => {server = app.listen(PORT)});
  afterAll(() =>  server.close());

  beforeEach((done) => {
    mongoose.connect(DB_TEST_HOST).then(() => done())
  })


  afterEach( (done) => {
    User.collection.drop()
    //  mongoose.connection.db.dropCollection();
     done();
  })
//   afterEach( (done) => {
//      mongoose.connection.db.dropDatabase()
//     done()
//   })
  

  test("test login route", async() => {
    const newUser = {
        email: "ipcotipcot@meta.ua",
        password: "123456",
        verify: true,
       
    };

    const user = await User.create(newUser);
    expect(user.subscription).toBe("starter");


    const loginUser = {
        email: "ipcotipcot@meta.ua",
        password: "123456",
        
    }

    const response = await request(app).post("/api/users/login").send(loginUser);
  
    expect(response.statusCode).toBe(200);
    const {body} = response;
   
    expect(body.token).toBeTruthy();
  
    console.log(user.token);
    console.log(body.token);
    const token = user.token
    // expect(body.token).toBe(token);


  });



});









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