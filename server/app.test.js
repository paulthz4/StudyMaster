const request = require('supertest')
const app = require("./index")

describe("Test example", ()=>{
  test("GET /",(done)=>{
    request(app)
    .get("/api/get")
    .expect("Content-Type", /json/)
    .expect(200)
    .expect((res) => {
      res.body.data.length = 1;
      res.body.data[0].email = "test@example.com";
    })
    .end((err, res) => {
      if (err) return done(err);
      return done();
    });
  })
  
  // test("POST /send",()=>{
  //   request(app)
  //   .post("/api/insert")
  //   .expect("Content-Type",/json/)
  //   .send({})
  //   .expect(401)
  //   .end((err,res)=>{
  //     if(err) return done(err);
  //     return done()
  //   })
  // })
})

