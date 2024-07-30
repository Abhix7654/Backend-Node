const dotenv = require('dotenv');
dotenv.config({
        path: './.env'
});
const express = require('express');
const app = express();
const logger=require('morgan');
const indexRouter = require('./routes/indexRouter');

app.use(logger('tiny'));
app.use('/', indexRouter);

app.listen(process.env.PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
}
);

