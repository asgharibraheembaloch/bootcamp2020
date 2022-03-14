import { gql, useQuery } from '@apollo/client'
import React from 'react'

const GET_BOOKS = gql`
  query ExampleQuery {
  books {
    title
    author
  }
}
`;

function Books() {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return <div>loading...</div>;
  if (error) return <div>error...</div>;
  
  return (
    <div>
      <ol>
        {data.books.map((book) => (
          <li>
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

export default Books