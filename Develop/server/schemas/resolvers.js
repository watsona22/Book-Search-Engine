const { Book, User } = require('../models');

const resolvers = {
    // Important for useQuery: The resolver matches the typeDefs entry point and informs the request of the relevant data
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                return User.find({ _id: req.context.user._id });

            }
        },

        // books: async (parent, { bookId }) => {
        //     return Book.findOne({ _id: BookId });
        // },
    },

    Mutation: {
        saveBook: async (parent, { name }) => {
            return Book.create({ name });
        },
        addUser: async (parent, { bookId, user }) => {
            return User.findOneAndUpdate(
                { _id: bookId },
                {
                    $addToSet: { user: user },
                },
                {
                    new: true,
                    runValidators: true,
                }
            );
        },
        removeBook: async (parent, { bookId }) => {
            return Book.findOneAndDelete({ _id: bookId });
        },
        // updateUser: async (parent, { bookId, user }) => {
        //     return User.findOneAndUpdate(
        //         { _id: User.Id },
        //         { $pull: { savedBooks: { bookId: params.bookId } } },
        //         { new: true }
        //     );
    },
};

module.exports = resolvers;
