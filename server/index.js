const {
  GraphQLServer
} = require('graphql-yoga')
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/STEMuli_DB');


var User = mongoose.model('User', {
  name: String,
  password: String,
  email: String,
  complete: Boolean
});

const typeDefs = `
  type Query {
    users:[User]
  }

type User{
  id: ID!
  name: String
  password: String!
  email: String!
  complete: Boolean
}

  type Mutation{
    createUser(name: String, password:String!, email:String!):User
    updateUser(id: ID!, complete:Boolean!): Boolean
    removeUser(id: ID!): Boolean
  }
`;
const resolvers = {
  Query: {
    users: () => User.find()
  },
  Mutation: {
    createUser: async (_, {
      name,
      password,
      email
    }) => {
      const user = new User({
        name,
        password,
        email,
        complete: false
      });
      await user.save();
      return user;
    },
    updateUser: async (_, {
      id,
      complete
    }) => {
      await User.findByIdAndUpdate(id, {
        complete
      });
      return true;
    },
    removeUser: async (_, {
      id
    }) => {
      await User.findByIdAndRemove(id);
      return true;
    }
  }
};

const server = new GraphQLServer({
  typeDefs,
  resolvers
});



var db = mongoose.connection;
db.once('open', function() {
  // we're connected!
  server.start(() => console.log("Server is running on localhost:4000"));
});
