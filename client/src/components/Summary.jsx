import React from 'react';

class Summary extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      reviews: this.props.reviews,
    }
  }

  
  render() {
    return (
      <div>
        <h3>Restaurant</h3>
        <div className='summary-stars'>
          <i className={this.props.ratingavg > 0 ? "fas fa-star rating-star-checked" : "fas fa-star rating-star-unchecked"}></i>
          <i className={this.props.ratingavg > 1 ? "fas fa-star rating-star-checked" : "fas fa-star rating-star-unchecked"}></i>
          <i className={this.props.ratingavg > 2 ? "fas fa-star rating-star-checked" : "fas fa-star rating-star-unchecked"}></i>
          <i className={this.props.ratingavg > 3 ? "fas fa-star rating-star-checked" : "fas fa-star rating-star-unchecked"}></i>
          <i className={this.props.ratingavg > 4 ? "fas fa-star rating-star-checked" : "fas fa-star rating-star-unchecked"}></i>
          <div className='rating-text-sum'><span>{this.props.reviews.length}</span> <span>Raitings</span></div>
        </div>
        <p className='p-summary'>Here's what people are saying: </p>
        <li className='was-food-good'> 
          <span>{this.props.percentageFoodGood}<span>% </span></span>
          <span className='second-span'>Food was good</span>
        </li>
        <li className='delivery-ontime'> 
          <span>{this.props.percentageFoodOnTime}<span>% </span></span>
          <span className='second-span'>Delivery was on time</span>
        </li>
        <li className='accurate-order'> 
          <span>{this.props.percentageOrderAccurate}<span>% </span></span>
          <span className='second-span'>Order was accurate</span>
        </li>
      </div>
    );
  }
}

export default Summary;