# Google Books Search Engine

This is a full-stack MERN (MongoDB, Express, React, Node.js) application that allows users to search for books using the Google Books API, save their favorite books, and manage their saved books. The application uses GraphQL for API communication and Apollo Client for state management on the client side.

## Features

- **Search for Books**: Users can search for books using the Google Books API.
- **User Authentication**: Users can sign up, log in, and log out.
- **Save Books**: Logged-in users can save books to their account.
- **View Saved Books**: Users can view and manage their saved books.

## Technologies Used

### Frontend
- React
- React Router
- Apollo Client
- Bootstrap

### Backend
- Node.js
- Express
- MongoDB with Mongoose
- GraphQL with Apollo Server

### Other Tools
- TypeScript
- Vite (for frontend development)
- JWT (for authentication)
- dotenv (for environment variable management)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd graphQL-project18
   ```

2. Install dependencies for both the client and server:
   ```bash
   npm run install
   ```

3. Set up environment variables:
   - Create a `.env` file in the `server` directory.
   - Add the following variables:
     ```env
     MONGODB_URI=<your-mongodb-uri>
     JWT_SECRET_KEY=<your-secret-key>
     ```

4. Start the development server:
   ```bash
   npm run develop
   ```

## Usage

- Navigate to `http://localhost:3000` in your browser.
- Use the search bar to find books.
- Sign up or log in to save books to your account.
- View your saved books in the "Saved Books" section.

## Deployment

  https://graphql-project18.onrender.com/

## Project Structure

### Client
- `src/components`: Contains reusable React components like `Navbar`, `LoginForm`, and `SignupForm`.
- `src/pages`: Contains page components like `SearchBooks` and `SavedBooks`.
- `src/utils`: Contains utility functions for API calls, local storage management, and GraphQL queries/mutations.
- `src/models`: Contains TypeScript interfaces for data models.

### Server
- `src/models`: Contains Mongoose schemas for `User` and `Book`.
- `src/schemas`: Contains GraphQL type definitions and resolvers.
- `src/services`: Contains authentication logic using JWT.
- `src/config`: Contains the MongoDB connection setup.

## GraphQL API

### Queries
- `me`: Fetch the logged-in user's data.

### Mutations
- `login(email: String!, password: String!)`: Log in a user and return a token.
- `addUser(username: String!, email: String!, password: String!)`: Sign up a new user and return a token.
- `saveBook(bookId: String!, authors: [String], description: String, title: String, image: String, link: String)`: Save a book to the user's account.
- `removeBook(bookId: String!)`: Remove a saved book from the user's account.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
