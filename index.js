const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// API endpoint to return random data for chart
app.get('/get-data', (req, res) => {
    const randomData = Array(4).fill(0).map(() => Math.floor(Math.random() * 100));
    res.json({ v: randomData });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
