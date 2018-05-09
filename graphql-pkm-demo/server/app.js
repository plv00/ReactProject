const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// allow cross-origin requests
app.use(cors());

// connect to mlab database

mongoose.connect('mongodb://test:test@ds016058.mlab.com:16058/pkmgodemo')
mongoose.connection.once('open', () => {
    console.log('conneted to database');
});

// bind express with graphql
// "true" allows graphql interface when going to link
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});
