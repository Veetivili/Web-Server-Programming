const express = require('express');
const app = express();

app.use(express.json());

// Import routes
const router = require('./routes/route');

app.use('/', router);

const PORT = 3003;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

