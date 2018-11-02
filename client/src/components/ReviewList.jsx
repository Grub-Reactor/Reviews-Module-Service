import React from 'react';
import Review from './Review.jsx'
import Summary from './Summary.jsx'

class ReviewList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      reviews: this.props.reviews
    }
  }
  
  render() {
    return (
      <ol>
        <div className='summary'>
          <Summary />
        </div>
        {this.props.reviews.map((review, index) => {
          return <Review key={index} review={review} />
        })}
      </ol>
    );
  }s
}

export default ReviewList;