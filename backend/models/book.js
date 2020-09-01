import mongoose  from "mongoose";

const bookSchema = new mongoose.Schema({

  id: String,
  name: String,
  author: String,
  summary: String,
  // about: [{ title: String, publishDate: Date }],

});


module.exports = mongoose.model('Book', bookSchema)
 