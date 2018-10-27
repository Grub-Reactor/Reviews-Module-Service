
const bodyParser = require('body-parser');
const express = require('express');
const PORT = 3000;
const app = express();
//import db

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname + '../client/dist'));



app.get('/restaurants/:restaurantID/', (req, res) => {
 

});



  app.listen(PORT, function() {
    console.log('node-express-sequelize listening on ' + port);
  });