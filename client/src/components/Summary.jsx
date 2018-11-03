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
      <div >
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
        <div className='summary-container'>
          <div className='was-food-good summary-p'> 
            <div className='bold'>{this.props.percentageFoodGood}<span>% </span></div>
            <div className='second-span'>Food was good</div>
          </div>
          <div className='delivery-ontime summary-p'> 
            <div className='bold'>{this.props.percentageFoodOnTime}<span>% </span></div>
            <div className='second-span'>Delivery was on time</div>
          </div>
          <div className='accurate-order summary-p'> 
            <div className='bold'>{this.props.percentageOrderAccurate}<span>% </span></div>
            <div className='second-span'>Order was accurate</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Summary;