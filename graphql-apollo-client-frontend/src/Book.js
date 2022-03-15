import React, { useEffect, useState } from "react";

function Book({ data }) {
  return (
    <div>
      <ol>
        {data.books.map((book) => (
          <li key={book.id}>
            title: {book.title}
            <br />
            Author: {book.author}
            <br />
            <br />
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Book;
