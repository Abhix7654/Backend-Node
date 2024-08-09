const dotenv = require('dotenv');
dotenv.config({ path: './Day7/.env' }); 

const path = require('path');
const express = require('express');
const logger = require('morgan');
const indexRouter = require('./routes/indexRouter');

const app = express();


const PORT = process.env.PORT ;


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(logger('tiny'));
app.use('/', indexRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
