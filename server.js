const app = require('./src/app.js');
const connectDB = require('./src/db/db.js');


connectDB();
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
