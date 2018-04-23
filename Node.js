const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');


let app = express();
let users = [];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.get('/', (req, res) => {
    res.render('index', {});
});
app.get('/users', (req, res) =>{
    res.render('users', {users: users})
});

app.post('/create', (req, res) => {
    let user = {
        id: req.body.id,
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        age: req.body.age
    };
    users.push(user);
    console.log(users);
    res.redirect('/users');

});

app.get('/edit/:id', (req, res) => {
     console.log('Here');
      for(let i=0; i < users.length; i++){
          //console.log('forloop');
          if(req.params.id === users[i].id){
              console.log('Match');
              res.render('edit', {user: users[i]});
          }
      }
});


app.listen(4000);
