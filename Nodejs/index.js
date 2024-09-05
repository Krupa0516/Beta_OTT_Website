const fs = require('fs');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Endpoint to fetch the user data from data.json
app.get('/api/userData', (req, res) => {
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading data.json:', err);
      res.status(500).json({ error: 'Error reading data.json' });
    } else {
      const userData = JSON.parse(data);
      res.status(200).json(userData);
    }
  });
});

app.post('/api/addData', (req, res) => {
  const newData = req.body; 
  const data = JSON.parse(fs.readFileSync('data.json'));

  // Add the new data to the existing data
  data.users.push(newData);

  fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
  res.status(200).json({ message: 'Data added successfully' });
});
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
