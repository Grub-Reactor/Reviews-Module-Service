import React from 'react'; 
import ReactDOM from 'react-dom';
import ReviewList from './components/ReviewList.jsx';
import css from '../main.css';


const restaurantId = window.location.pathname.split('/')[1];
const url = `/${restaurantId}/allreviews/reviews/`;
console.log(url);
fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    ReactDOM.render( <ReviewList reviews={data}/>, 
        document.getElementById("reviews")
    );
  });

