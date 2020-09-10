const request = require("supertest");
const app = require("../app");

//Negative Tests
describe("Test the about path", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/about")
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });
});

