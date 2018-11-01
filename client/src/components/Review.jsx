import React from 'react';
import moment from 'moment';

class Review extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      reviews: this.props.review
    }
  }
  
  render() {
    {console.log(this.props.review)}
    return (
      <li>
        <div className='review'>
          <div className='userinfo'>
            <div className ='userimage'> {this.props.review.username[0]}</div>
          </div>
          <div>
            <h6>{this.props.review.username}</h6>
            <div className='date1'>
              <div className='date2'>
                <span className='metal-label'>
                  {moment(this.props.review.createdAt, 'YYYY-MM-DD Th:mm:ss').startOf('hour').fromNow()}
                </span>
              </div>
            </div>
          </div>
          <div className='message'>
            {this.props.review.reviewMsg}
          </div>
        </div>
      </li>
    );
  }
}

export default Review;