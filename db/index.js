const mysql = require('mysql');
const faker = require('faker');

var connection = mysql.createConnection({
  host     : 'localhost',
	user     : 'root',
	password : 'password',
  database : 'grubhub_reviews'
});

const getAllReviews = (callback) => {
  connection.query('Select * from reviews', function (error, results) {
		if (error) {
			callback(error, null);
		} else {
			callback(null, results)
		}
  }); 
};

const getAllUsers = (callback) => {
  connection.query('Select * from users', function (error, results) {
		if (error) {
			callback(error, null);
		} else {
			callback(null, results)
		}
  }); 
};

const insertUser = (username, reviewsCount, callback) => {
  const query = `INSERT into users (username, reviewsCount) VALUES (?, ?)`
	connection.query(query, [username, reviewsCount], function (error, results) {
		if (error) {
			callback(error, null);
		} else {
			callback(null, results)
		}
	});
};

const insertRestaurant = (restaurantName, callback) => {
  const query = `INSERT into restaurants (restaurantName) VALUES (?)`
	connection.query(query, [restaurantName], function (error, results) {
		if (error) {
			callback(error, null);
		} else {
			callback(null, results)
		}
	});  
};

const insertItem = (itemName, iDescription, price, callback) => {
  const query = `INSERT into items (itemName, iDescription, price) VALUES (?, ?, ?)`
	connection.query(query, [itemName, iDescription, price], function (error, results) {
		if (error) {
			callback(error, null);
		} else {
			callback(null, results)
		}
	});  
};

const insertReview = (createdAt, userRating, wasFoodGood, wasFoodDeliveredOnTime, wasOrderAccurate, reviewMsg, userId, restaurantId, callback) => {
  var query = `INSERT into reviews (createdAt, userRating, wasFoodGood, wasFoodDeliveredOnTime, wasOrderAccurate, reviewMsg, userId, restaurantId) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
	connection.query(query, [createdAt, userRating, wasFoodGood, wasFoodDeliveredOnTime, wasOrderAccurate, reviewMsg, userId, restaurantId], function (error, results) {
		if (error) {
			callback(error, null);
		} else {
			callback(null, results)
		}
	});
}

const insertItemsOrdered = (reviewId, itemId, callback) => {
  const query = `INSERT into items (reviewId, itemId) VALUES (?, ?)`
	connection.query(query, [reviewId, itemId], function (error, results) {
		if (error) {
			callback(error, null);
		} else {
			callback(null, results)
		}
	});   
}


module.exports = { 
	getAllReviews: getAllReviews,
	getAllUsers: getAllUsers,
  insertUser: insertUser,
	insertRestaurant: insertRestaurant,
	insertItem: insertItem,
  insertReview: insertReview,
  insertItemsOrdered: insertItemsOrdered
};
