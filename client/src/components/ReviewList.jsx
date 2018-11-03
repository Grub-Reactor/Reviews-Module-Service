import React from 'react';
import Review from './Review.jsx'
import Summary from './Summary.jsx'

class ReviewList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      reviews: this.props.reviews
    }
  };

  calculatePercentageAndRatings() {

    let totalFoodGood = 0;
    let totalFoodOnTime = 0;
    let totalOrderAccurate = 0;
    let totalReview = 0;
    this.state.reviews.map((review) => {
      totalFoodGood += review.wasFoodGood;
      totalFoodOnTime += review.wasDeliveredOnTime;
      totalOrderAccurate += review.wasOrderAccurate;
      totalReview += review.userRating;
    });

    console.log(totalReview);

    let ratings = {
      percentageFoodGood: Math.floor(totalFoodGood/this.state.reviews.length * 100),
      percentageFoodOnTime: Math.floor(totalFoodOnTime/this.state.reviews.length * 100),
      percentageOrderAccurate: Math.floor(totalOrderAccurate/this.state.reviews.length * 100),
      ratingavg: Math.ceil(totalReview/this.state.reviews.length),
    }

    return ratings;
  };

  

  render() {
    this.ratings = this.calculatePercentageAndRatings();
    // {this.props.reviews !== undefined || this.props.reviews.length > 0}
    return (
      
      <ol>
        <div className="summary">
          <Summary 
            reviews={this.props.reviews} 
            percentageFoodGood={this.ratings.percentageFoodGood} 
            percentageFoodOnTime={this.ratings.percentageFoodOnTime} 
            percentageOrderAccurate={this.ratings.percentageOrderAccurate} 
            ratingavg={this.ratings.ratingavg}
          />
        </div>
        {this.props.reviews.map((review, index) => {
          return <Review key={index} review={review} />
        })}
      </ol>
    );
  }s
}

export default ReviewList;