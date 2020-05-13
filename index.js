const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://ime:dkssud@boilerplate-k9x99.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('mongoDB Connected...'))
  .catch(err => console.log('err'))

app.get('/', (req, res) => res.send('Hello World! 안녕'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))