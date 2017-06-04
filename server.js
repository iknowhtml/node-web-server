const express = require('express');
const app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  // res.send('<h1>Hello Express!</h1>');
  // res.send({
  //   name: 'Aki',
  //   likes: ['Coding', 'Dancing', 'Working Out'],
  // });
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    welcomeMessage: 'Welcome to my website.',
    currentYear: new Date().getFullYear(),
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page',
    currentYear: new Date().getFullYear(),
  });
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle request',
  });
});
app.listen(8080, () => {
  console.log('Port is up on port 8080');
});
