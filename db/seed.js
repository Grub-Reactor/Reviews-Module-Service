const data = require('./data');
const faker = require('faker');
const db = require('./index');
const restaurants = data.restaurants;


const seedUsers = function() {
	for (let i = 0; i < 20; i++) {
    const username = faker.internet.userName();
    const countReviews = Math.floor(Math.random()*15);
		db.insertUser(username, countReviews, (error, results) => {console.log(error, results)});
	}
};

const seedRestaurants = function() {
	for (let i = 0; i < 20; i++) {
    const name = restaurants[i];
		db.insertUser(name, (error, results) => {console.log(error, results)});
	}
};

seedUsers();
seedRestaurants();

module.exports = { 
  seedUsers: seedUsers,
 
};