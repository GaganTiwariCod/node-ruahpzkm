const app = require('./app.js');

app.get('/health', (req, res) => {
  res.send('It working the application');
});

const nodes = [];

// app.get('/node',(req,res)=>{

//   res.send();
// })

app.post('/node', (req, res) => {
  nodes.push(req.body);

  res.status(201).json({
    message: 'Inserted Scussfully',
  });
});

app.listen(3000, (req, res) => {
  console.log('Welcome to the Gagan Server');
});
