const faker = require('faker');
const data = require('./data');
const db = require('./index');

const restaurants = data.restaurants;
const menu = data.menu;

const seedRestaurants = () => {
  for (let i = 0; i < 20; i += 1) {
    const name = restaurants[i];
    db.insertRestaurant(name, (error, results) => {
      if (error) {
        console.log(error);
      } else {
        console.log(results);
      }
    });
  }
};

const seedItem = () => {
  for (let i = 0; i < menu.length; i += 1) {
    const name = menu[i];
    const iDescription = faker.lorem.sentence();
    const price = faker.commerce.price();
    db.insertItem(name, iDescription, price, (error, results) => {
      if (error) {
        console.log(error);
      } else {
        console.log(results);
      }
    });
  }
};

const seedItemOrdered = () => {
  db.countRows('reviews', (error, numOfReviews) => {
    if (!error) {
      db.countRows('items', (err, numOfItems) => {
        if (!err) {
          for (let i = 0; i < 15; i += 1) {
            const reviewId = Math.floor(Math.random() * numOfReviews);
            const itemId = Math.floor(Math.random() * numOfItems);
            db.insertItemsOrdered(reviewId, itemId, (error3, results) => {
              if (!error3) {
                console.log(results);
              } else {
                console.log(error);
              }
            });
          }
        }
      });
    }
  });
};


const seedReviews = (userId, restaurantId) => {
  const createdAt = faker.date.past();
  const wasFoodGood = faker.random.boolean();
  const wasFoodDeliveredOnTime = faker.random.boolean();
  const wasOrderAccurate = faker.random.boolean();
  const reviewMsg = faker.lorem.sentence();
  const userRating = Math.floor(Math.random() * 5);
  db.insertReview(createdAt, userRating, wasFoodGood, wasFoodDeliveredOnTime, wasOrderAccurate, reviewMsg, userId, restaurantId,
    (error, results) => {
      if (!error) {
        console.log(results);
        seedItemOrdered();
      } else {
        console.log(error);
      }
    });
};

const seedUsers = () => {
  for (let i = 0; i < 20; i += 1) {
    const username = faker.internet.userName();
    const countReviews = Math.floor(Math.random() * 15);
    db.insertUser(username, countReviews, (error, results) => {
      if (error) {
        console.log(error);
      } else {
        console.log(results);
        const userId = results.insertId;
        db.countRows('restaurants', (err, numOfRestaurants) => {
          if (!error) {
            for (let j = 0; j < countReviews; j += 1) {
              const restaurantId = Math.floor(Math.random() * numOfRestaurants);
              seedReviews(userId, restaurantId);
            }
          }
        });
      }
    });
  }
};

seedRestaurants();
seedItem();
seedUsers();

module.exports = {
  seedUsers,
  seedRestaurants,
  seedItem,
};
