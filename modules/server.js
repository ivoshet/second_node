const express = require('express');
const app = express();

const server = () => {
    app.get('/', (req, res) => res.send('hello my dear frien'));
    app.listen(3000, () => console.log('server is running'));
}

module.exports = {server};

