const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const items = require('./routes/api/items');

// import init-function for initiate metas into db
// const metaInit = require('./models/Meta').metaInit;
const Util = require('./models/util').Util;

const app = express();

//BodyParser MiddleWare
app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;
// const db = 'mongodb://dbservice:27017/mern';
// const db = 'mongodb://localhost:27017/mern';

// Connect to mongo
mongoose.connect(db, 
    {
        useNewUrlParser: true
        , useCreateIndex: true
        , useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB connected..'))
    .catch(err => {
        console.log("DB connection failed.")
        console.log(err);
    }
);

// Use Routes
app.use('/api/items', items);  // a route I defined under api/

// Serve static assets if in production, or, as here I commented the line out,
// when / or /index.html isrequested
//if(process.env.NODE_ENV === 'production'){
// app.use(express.static('client/build'));
app.get('/index.html', (req, res) => {
    console.log("initiating metas into db...")
    const util = new Util(mongoose.connection.db);
    util.make_meta('RLT');
    util.make_meta('ITU');
    console.log('u.make_rlts called.s');
    app.use(express.static('client/build'));
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
})
//}

const port = process.env.PORT || 5000;
console.log('process.env.NODE_ENV: ', process.env.NODE_ENV);

app.listen(port, () => console.log(`Server started on port ${port}`));
