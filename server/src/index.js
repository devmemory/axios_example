const express = require('express');

const cors = require('cors')

const app = express();

const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: 'http://localhost:3000'
}))

const test = require('./test/index')

app.use('/test',test)

const server = app.listen(port, () => {
    const address = server.address();
    console.log('Node server on : ', { address });
});