const express = require('express') //eslint-disable-line
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000 //eslint-disable-line

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  if (true) throw('error... ')
  res.send(ok)
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`) //eslint-disable-line
})
