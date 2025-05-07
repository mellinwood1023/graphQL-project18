import { gql } from 'graphql-tag';

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]

  }

  type Book {
    bookId: ID!
    authors: [String]
    decription: String
    title: String
    image: String
    link: String

  }

type Auth {
    token: ID!
    user: User}
}

  type Query {
    me: User
  }

  type Mutation {
    login: (email: String!, password: String!): Auth
    addUser: (username: String!, email: String!, password: String!): Auth
    saveBook: (bookID: String!, authors: [String], description: String!, title: String!, image: String!, link: String!): User
    removeBook: (bookID: String!): User
    }
`;

export default typeDefs;