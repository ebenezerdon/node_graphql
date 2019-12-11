import graphql from 'graphql';
import db from './db';
const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt } = graphql;

const authorType = new GraphQLObjectType({
  name: 'Author',
  fields: {
    name: {
      type: GraphQLString
    },
    bio: {
      type: GraphQLString
    },
    country: {
      type: GraphQLString
    }
  }
});

const articleType = new GraphQLObjectType({
  name: 'Article',
  fields: {
    author: {
      type: authorType,
      resolve: (source, params) => {
        return db.authors.filter(author => source.username === author.username)
      }
    },
    slug: {
      type: GraphQLString
    },
    firstName: {
      type: GraphQLString
    },
    lastName: {
      type: GraphQLString
    },
    bio: {
      type: GraphQLString
    },
    imageUrl: {
      type: GraphQLString
    },
    title: {
      type: GraphQLString
    },
    description: {
      type: GraphQLString
    },
    category: {
      type: GraphQLString
    },
    body: {
      type: GraphQLString
    },
    readTime: {
      type: GraphQLInt
    },
    coverImageUrl: {
      type: GraphQLString
    },
    createdOn: {
      type: GraphQLString
    },
    modifiedOn: {
      type: GraphQLString
    },
  }
});

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return 'world'
        }
      }
    }
  })
})

export default schema;
