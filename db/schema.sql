DROP DATABASE IF EXISTS grubhub_reviews;

CREATE DATABASE grubhub_reviews;

USE grubhub_reviews;

CREATE TABLE users (
  userId int not null auto_increment,
  username varchar(50) UNIQUE,
  reviewsCount int,
  primary key (userId)
);

CREATE TABLE restaurants (
  id int not null auto_increment,
  restaurantName varchar(50) UNIQUE,
  primary key (id)
);

CREATE TABLE items (
  id int not null auto_increment,
  itemName varchar(50) UNIQUE,
  iDescription varchar(250),
  price int,
  primary key (id)
);

CREATE TABLE reviews (
  id int not null auto_increment,
  createdAt date,
  userRating int,
  wasFoodGood boolean,
  wasDeliveredOnTime boolean,
  wasOrderAccurate boolean,
  reviewMsg varchar(300),
  userId int,
  restaurantId int,
  foreign key (userId) references users(userId),
  foreign key (restaurantId) references restaurants(id),
  primary key (id)
);

CREATE TABLE itemsOrdered (
  id int not null auto_increment,
  reviewId int,
  itemId int,
  primary key (id)
);


/*  Execute this file from the command line by typing:
 *    mysql -uroot -p < ./db/schema.sql