import React from 'react'; 
import ReactDOM from 'react-dom';
import ReviewList from './components/ReviewList.jsx';


  const url = `${window.location}reviews`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      ReactDOM.render( <ReviewList reviews={data}/>, 
        document.getElementById("app")
      );
    });

