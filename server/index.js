
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const db = require('../db/index');


const PORT = 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/restaurants/:restaurantID/', express.static(path.join(__dirname, '../client/dist/')));

// app.get('/restaurants/:restaurantID/', (req, res) => {

// });

app.get('/restaurants/:restaurantID/reviews', (req, res) => {
  const restaurantId = req.params.restaurantID;
  db.getReviewsByRestaurantId(restaurantId, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.send(data);
    }
  });
});

app.listen(PORT, () => {
  console.log(`node-express-sequelize listening on...  ${PORT}`);
});
