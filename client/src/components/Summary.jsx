import React from 'react';

class Summary extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      reviews: this.props.reviews
    }
  }
  
  render() {
    return (
      <div>
        <h3>Restaurant</h3>
        <div className='summary-stars'>
          <i className={1 > 0 ? "fas fa-star rating-star-checked" : "fas fa-star rating-star-unchecked"}></i>
          <i className={1 > 0 ? "fas fa-star rating-star-checked" : "fas fa-star rating-star-unchecked"}></i>
          <i className={1> 0 ? "fas fa-star rating-star-checked" : "fas fa-star rating-star-unchecked"}></i>
          <i className={1 > 0 ? "fas fa-star rating-star-checked" : "fas fa-star rating-star-unchecked"}></i>
          <i className={1 > 0 ? "fas fa-star rating-star-checked" : "fas fa-star rating-star-unchecked"}></i>
          <div className='rating-text-sum'><span>549</span> <span>Raitings</span></div>
        </div>
        <p className='p-summary'>Here's what people are saying: </p>
        <li className='was-food-good'> 
          <span>88<span>% </span></span>
          <span className='second-span'>Food was good</span>
        </li>
        <li className='delivery-ontime'> 
          <span>88<span>% </span></span>
          <span className='second-span'>Delivery was on time</span>
        </li>
        <li className='accurate-order'> 
          <span>88<span>% </span></span>
          <span className='second-span'>Order was accurate</span>
        </li>
      </div>
    );
  }
}

export default Summary;