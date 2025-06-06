import { gql } from '@apollo/client';

export const CREATE_LOGIN = gql`
  mutation login ($email: String!, $password: String!){
    login(email: $email, password: $password) {
      token
      user {
        username
        }
    }
  }
`;

export const CREATE_USER = gql`
  mutation addUser ($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
        token 
        user {
          username
        }
    }
}
`
export const SAVE_BOOK = gql`
mutation saveBook($bookId: String!, $authors: [String], $description: String, $title: String, $image: String, $link: String) {
  saveBook(bookId: $bookId, authors: $authors, description: $description, title: $title, image: $image, link: $link) {
    _id
    username
    email
    bookCount
    savedBooks {
      bookId
      authors
      description
      title
      image
      link
    }
  } 
}
`

export const REMOVE_BOOK = gql`
mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId) {
        _id
        username
        email
        bookCount
        savedBooks {
        bookId
        authors
        description
        title
        image
        link
        }
    } 
}
    `;
    
// export default REMOVE_BOOK
// `;