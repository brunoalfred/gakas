import React from "react";
import { useQuery } from "react-query";

export default function Books() {
  const { isLoading, error, data } = useQuery("books", () =>
    fetch("http://localhost:3000/api/v1/books").then((res) => res.json())
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="container mt-3">
      <h1>Books</h1>

      <div className="list-group">
        {data.map((book) => (
          <a
            key={book.id}
            href="#"
            className="list-group-item list-group-item-action flex-column align-items-start"
          >
            <div className="d-flex w-100 justify-content-between ">
              <h5 className="mb-1">
                <strong>{book.name}</strong>
              </h5>
              <small>small</small>
            </div>
            <p className="mb-1">{book.description}</p>
            <small>paragraph footer</small>
          </a>
        ))}
      </div>
    </div>
  );
}
