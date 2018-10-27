const data = require('./data');
const faker = require('faker');
const db = require('./index');
const restaurants = data.restaurants;
const menu = data.menu;


const seedUsers = () => {
	for (let i = 0; i < 20; i++) {
    const username = faker.internet.userName();
    const countReviews = Math.floor(Math.random()*15);
		db.insertUser(username, countReviews, (error, results) => {console.log(error, results)});
	}
};

const seedRestaurants = () => {
	for (let i = 0; i < 20; i++) {
    const name = restaurants[i];
		db.insertRestaurant(name, (error, results) => {console.log(error, results)});
	}
};

const seedItem = () =>{
  for (let i = 0; i < menu.length; i++) {
    const name = menu[i];
    const iDescription = faker.lorem.sentence();
    const price = faker.commerce.price();
		db.insertItem(name, iDescription, price, (error, results) => {console.log(error, results)});
	}
}


seedUsers();
seedRestaurants();
seedItem();

module.exports = { 
  seedUsers: seedUsers,
 
};