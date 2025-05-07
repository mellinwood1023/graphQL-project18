import express from 'express';
import path from 'node:path';
import db from './config/connection.js';
// import routes from './routes/index.js';
import { typeDefs, resolvers } from './schemas/index.js';
import { authenticateToken } from './services/auth.js';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';

const app = express();
const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs, 
  resolvers
})

const startApolloServer = async () => {
  await server.start();
  await db;
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use('/graphql', expressMiddleware(server as any, 
    {
      context: authenticateToken as any
    }
  ))
  if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}
 app.listen(PORT, () => {
    console.log(`API server is running on port ${PORT}!`);
 });
}

startApolloServer();

// if we're in production, serve client/build as static assets

