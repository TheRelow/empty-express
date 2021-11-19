const express = require('express')
const app = express()

const PORT = process.env.PORT || 3333

app.listen(PORT, ()=>{
  console.log('Server has been started on port ' + PORT)
})

app.get('/', (req, res, next)=>{
  res.status(200).send({ text: 'test' })
})