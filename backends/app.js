// const express = require('express');
// const logger = require('morgan');
// const cors = require("cors");


// const booksRouter = require('./routes/Books');

// const app = express();
// app.use(cors({
//     origin: '*', // Allow all origins (for development purposes)
//   }));
// app.use(cors());
// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// app.use('/books', booksRouter);



// fetch('http://localhost:3000/books', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(bookData),
//   });

// module.exports = app;


const express = require('express');
const logger = require('morgan');
const cors = require("cors");

const booksRouter = require('./routes/Books');

const app = express();
app.use(cors({
    origin: '*', // Allow all origins (for development purposes)
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/books', booksRouter);

module.exports = app;