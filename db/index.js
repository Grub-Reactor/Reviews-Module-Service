const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'grubhub_reviews',
});

const getAllReviews = (callback) => {
  connection.query('Select * from reviews', (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
};


// TODO: getReviewsByResturantId
const getReviewsByRestaurantId = (restaurantId, callback) => {
  const query = `select * from reviews  
    inner join users on reviews.userId = users.userId
    where reviews.restaurantId = ${restaurantId}`; // TODO: investigate about SQL Injection (later)

  connection.query(query, (error, reviews) => {
    if (error) {
      callback(error, null);
    } else {
      const ids = reviews.map(r => r.id.toString()).join(',');
      const itemsQuery = `
        select * from itemsOrdered
        inner join items on items.id = itemsOrdered.itemId
        where reviewId in (${ids})`;
      connection.query(itemsQuery, (err, items) => {
        // TODO: capture error
        if (!err) {
          const reviewsWithItems = reviews.map((review) => {
            review.items = items.filter(item => item.reviewId === review.id);
            return review;
            // TODO: how does spread op work?
            // return {
            //   ...review,
            //   items: items.filter(item => item.reviewId === review.id)
            // };
          });
          callback(null, reviewsWithItems);
        }
      });
    }
  });
};

const getAllUsers = (callback) => {
  connection.query('Select * from users', (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
};

const insertUser = (username, reviewsCount, callback) => {
  const query = 'INSERT into users (username, reviewsCount) VALUES (?, ?)';
  connection.query(query, [username, reviewsCount], (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
};

const insertRestaurant = (restaurantName, callback) => {
  const query = 'INSERT into restaurants (restaurantName) VALUES (?)';
  connection.query(query, [restaurantName], (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
};

const insertItem = (itemName, iDescription, price, callback) => {
  const query = 'INSERT into items (itemName, iDescription, price) VALUES (?, ?, ?)';
  connection.query(query, [itemName, iDescription, price], (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
};

const insertReview = (createdAt, userRating, wasFoodGood, wasDeliveredOnTime, wasOrderAccurate, reviewMsg, userId, restaurantId, callback) => {
  const query = `
    INSERT into reviews 
    (createdAt, userRating, wasFoodGood, wasDeliveredOnTime, wasOrderAccurate, reviewMsg, userId, restaurantId) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

  connection.query(query,
    [createdAt, userRating, wasFoodGood, wasDeliveredOnTime, wasOrderAccurate, reviewMsg, userId, restaurantId],
    (error, results) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, results);
      }
    });
};

const insertItemsOrdered = (reviewId, itemId, callback) => {
  const query = 'INSERT into itemsOrdered (reviewId, itemId) VALUES (?, ?)';
  connection.query(query, [reviewId, itemId], (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      console.log('created');
      callback(null, results);
    }
  });
};

const countRows = (tableName, callback) => {
  const query = `SELECT COUNT(*) FROM ${tableName}`;
  connection.query(query, (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results[0]['COUNT(*)']);
    }
  });
};

module.exports = {
  getAllReviews,
  getAllUsers,
  insertUser,
  insertRestaurant,
  insertItem,
  insertReview,
  insertItemsOrdered,
  countRows,
  getReviewsByRestaurantId,
};
