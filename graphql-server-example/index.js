const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
let crypto = require("crypto");

const books = [
  {
    id: "1",
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    id: "2",
    title: "City of Glass",
    author: "Paul Auster",
  },
];

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    books: () => books,
  },
  Mutation: {
    createBook: (_, { input }) => {
      let ID = crypto.randomBytes(10).toString("hex");
      books.push({ id: ID, title: input.title, author: input.author });
      return { id: ID, title: input.title, author: input.author };
    },
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
