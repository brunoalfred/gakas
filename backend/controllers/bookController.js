const books = [
  { id: 1, name: "Chand", description: "this is a " },
  { id: 2, name: "Abort", description: "this is a " },
  { id: 3, name: "Rodger", description: "this is a " },
];

function listBooks(req, res) {
  res.send(books);
}

function storeBook(req, res) {
    const book = {
        name:req.body.name,
        author:req.body.author,
        summary:req.body.summary,
    }
    res.send(book)
}

module.exports = { listBooks, storeBook };
