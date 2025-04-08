const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const filePath = path.join(__dirname, "data.json"); // JSON file in project root

app.use(express.json());

// Ensure JSON file exists
if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify({ message: "Hello, Railway!" }, null, 2));
}

// Read JSON
app.get('/api/data', (req, res) => {
    const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    res.json(jsonData);
});

// Write JSON
app.post('/api/data', (req, res) => {
    fs.writeFileSync(filePath, JSON.stringify(req.body, null, 2));
    res.json({ message: "Data saved!" });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
