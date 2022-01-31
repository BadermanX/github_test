const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const path = require('path');

app.use(express.static('build'))
app.use(bodyParser.json())

const dataRoutes = require('./backend/routes/dataRoute');
app.use('/api', dataRoutes);

const crudRoutes = require('./backend/routes/crudRoutes');
app.use('/crud', crudRoutes);

app.get('/*', (req,res)=>{
  res.sendFile(`${path.resolve(__dirname)}/./build/index.html`)
})

app.listen(port, () => {
  console.log(`Serving on port ${port}`)
})