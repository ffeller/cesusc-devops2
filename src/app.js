express = require('express')
app = express()
port = 3000

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})

app.get('/', (req, res) => {
res.sendFile('views/index.html', { root: __dirname })
})

data = {'integrantes':[
  {'nome':'fulano da silva'},
  {'nome':'ciclano sauro'},
  {'nome':'Flaris Feller'}
]}

app.get('/integrantes', (req, res) => {
  res.json(data)
})
