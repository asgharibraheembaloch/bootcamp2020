import { gql, useMutation, useQuery } from "@apollo/client";
import React, { useMemo, useState } from "react";
import Book from "./Book";

const GET_BOOKS = gql`
  query ExampleQuery {
    books {
      id
      title
      author
    }
  }
`;

const CREATE_BOOK_MUTATION = gql`
  mutation createBook($author: String!, $title: String!) {
    createBook(input: { author: $author, title: $title }) {
      id
      author
      title
    }
  }
`;

function Books() {
  const [formState, setFormState] = useState({
    author: "",
    title: "",
  });
  const { loading, error, data, refetch } = useQuery(GET_BOOKS);

  const [addBook] = useMutation(CREATE_BOOK_MUTATION, {
    variables: {
      author: formState.author,
      title: formState.title,
    },
  });
  useMemo(() => {
    if (loading || error) return null;

    // mutate data here
    return data;
  }, [loading, error, data]);

  // safe to assume data now exist and you can use data.
  /* const mutatedData = (() => {
  // if you want to mutate the data for some reason
  return data
})() */

  if (loading) return <div>loading...</div>;
  if (error) return <div>error...</div>;

  return (
    <div>
      <Book data={data} />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addBook();
          refetch();
        }}
      >
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={formState.author}
            onChange={(e) =>
              setFormState({
                ...formState,
                author: e.target.value,
              })
            }
            type="text"
            placeholder="the author for the Book"
          />
          <input
            className="mb2"
            value={formState.title}
            onChange={(e) =>
              setFormState({
                ...formState,
                title: e.target.value,
              })
            }
            type="text"
            placeholder="the title for the Book"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Books;
