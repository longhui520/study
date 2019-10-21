// server.js
const express = require('express');
const expressGraphql = require('express-graphql');
const app = express();

const schema = require('./schema');
app.use('/graphql', expressGraphql({
	schema,
	graphiql: true
}));

app.get('/', (req, res) => res.end('index'));

app.listen(8000, (err) => {
  if(err) {throw new Error(err);}
  console.log('*** server started ***');
});
