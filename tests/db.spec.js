const request = require("supertest");
const app = require("../app");
const mongoose = require("mongoose");
const User = require("../models/user");

require("dotenv").config();

const uri = process.env.DB_URI;

describe("Test the addLike method", () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await mongoose.connect(uri, {
      useNewUrlParser: true,
    });
  });

  afterAll(async () => {
    await connection.close();
    await db.close();
  });

  it("should insert a document into collection", async () => {
    const mockUser = { email: "sasasa@gmial.com", password: 23 };

    const user = await User.create({
      email,
      password,
    });
    await user.insertOne(mockUser)

    const insertedUser = await User.findOne({
        email: "sasasa@gmial.com"
    });
    expect(insertedUser).toEqual(mockUser)
  });
});
