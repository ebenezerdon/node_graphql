const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('../schema');

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

module.exports = router;
