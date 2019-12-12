const graphql = require('graphql');
const db = require('./db');
const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList } = graphql;

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
      resolve: (source, {username}) => {
        return db.authors.filter(author => username === author.username)
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

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    article: {
      type: articleType,
      args: {
        slug: { type: GraphQLString }
      },
      resolve: (source, {slug}) => {
        return db.articles.filter(article => slug === article.slug)
      }
    },
    articles: {
      type: new GraphQLList(articleType),
      resolve: () => db.articles
    }
  }
})

const schema = new GraphQLSchema({
  query: queryType
})

module.exports = schema;
