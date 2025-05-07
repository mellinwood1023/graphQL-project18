// import { User } from "../models/index.js";
import User from "../models/User.js";
import { signToken } from "../services/auth";

const resolvers = {
  Query: {
  me: async (_parent: any, _args: any, _context: any) => {
        if (_context.user) {
            const user = await User.findById(_context.user._id)
            return user
        }
        throw new Error('You need to be logged in!')
  },
  Mutation: {
   login: async (_parent: any, args: any, _context: any) => {
        const user = await User.findOne({ email: args.email})
        if (!user) {
            throw new Error('No user found with this email address!')
        }
        const correctPw = await user.isCorrectPassword(args.password)
        if (!correctPw) {
            throw new Error('Incorrect password!')
        }
        const token = signToken(user.username, user.email, user._id)
        return { token, user }
    },
    addUser: async (_parent: any, args: any, _context: any) => {
        const user = await User.create(args) 
        if (!user) {
            throw new Error('No user found with this email address!')
        }
        const token = signToken(user.username, user.email, user._id)
        return { token, user }
    },
    saveBook: async (_parent: any, args: any, _context: any) => {
        if (_context.user) {
            const updatedUser = await User.findByIdAndUpdate(
                {_id: _context.user._id},
                { $addToSet: { savedBooks: args } },
                { new: true, runValidators: true }
            )
            return updatedUser
    }
        throw new Error('You need to be logged in!')
   },
   removeBook: async (_parent: any, args: any, _context: any) => {
        if (_context.user) {
            const updatedUser = await User.findByIdAndUpdate(
                { _id: _context.user._id },
                { $pull: { savedBooks: { bookId: args.bookId } } },
                { new: true }
            )
            return updatedUser
        }
        throw new Error('You need to be logged in!')
   }
  },
}};

export default resolvers;