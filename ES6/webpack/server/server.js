const express  = require('express');
const path = require('path');
const app = express();

const port = 3000;

app.use(express.static(__dirname + '/../dist'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/../dist')
app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => {
  res.render('index.html');
})
app.get('/menu', (req, res) => {
  res.render('menu.html');
})

app.listen(port, () => {
  console.log('Express listening on port', port);
});