const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json()); // for parsing application/json

const plans = [
  {
    date: '11/22',
    startTime: '3:00PM',
    endTime: '4:00PM',
    gamertag : 'Libido Uncle',
  }
];
// Plan Shape
// const plan = {
//   date: '',
//   startTime: '',
//   endTime: '',
//   gamertag : ''
// };

app.post('/plans', (req, res) => {
  console.log('am i here?');
  const plan = req.body;
  plans.push(plan);
  res.json({});
});

app.get('/plans', (req, res) => {
  res.json(plans);
})

app.post('/plans', (req, res) => {
  console.log('am i here?');
  const plan = req.body;
  plans.push(plan);
  res.json({});
});

app.get('/plans', (req, res) => {
  res.send("addGamePlan.html");
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})