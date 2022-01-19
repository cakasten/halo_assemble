const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // for parsing application/json

const plans = [];
// Plan Shape
// const plan = {
//   date: '',
//   startTime: '',
//   endTime: '',
//   gamertag : ''
// };

app.post('/plans', (req, res) => {
  const plan = req.body;
  plans.push(plan);
});

app.get('/plans', (req, res) => {
  res.json(plans);
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})