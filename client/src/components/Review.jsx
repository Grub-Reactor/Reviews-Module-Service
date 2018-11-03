import React from 'react';
import moment from 'moment';

class Review extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      reviews: this.props.review,
      itemHovered: 'none'
    }
  }
  
  render() {
    {console.log(this.props.review)}
    return (
      <li>
        <div className='review'>
          <div className='userinfo'>
            <div className='userimage-container'>
              <div className ='userimage'> 
                <h6 className='first-user-letter'>{this.props.review.username[0]}</h6>
              </div>
            </div>
            <div className='user-summary'>
              <div className='username-date'>
                <h6 className='username'>{this.props.review.username}</h6>
                <div className='date1'>
                  <div className='date2'>
                    <span className='date-label'>
                      {moment(this.props.review.createdAt, 'YYYY-MM-DD Th:mm:ss').startOf('hour').fromNow()}
                    </span>
                  </div>
                </div>
              </div>
              <div className='user-reviews'>
                <div className='reviews-caption'>
                  <span><i className={this.props.review.reviewsCount >= 13 ? "fas fa-trophy" : "fas fa-star blue-star"}> </i>{' ' + this.props.review.reviewsCount} {this.props.review.reviewsCount > 1 ? 'reviews' : 'review'}</span>
                </div>
              </div>
            </div>
          </div>
          <div className='review-info'>
            <div className='stars'>
              <i className={this.props.review.userRating > 0 ? "fas fa-star rating-star-checked" : "fas fa-star rating-star-unchecked"}></i>
              <i className={this.props.review.userRating > 1 ? "fas fa-star rating-star-checked" : "fas fa-star rating-star-unchecked"}></i>
              <i className={this.props.review.userRating > 2 ? "fas fa-star rating-star-checked" : "fas fa-star rating-star-unchecked"}></i>
              <i className={this.props.review.userRating > 3 ? "fas fa-star rating-star-checked" : "fas fa-star rating-star-unchecked"}></i>
              <i className={this.props.review.userRating > 4 ? "fas fa-star rating-star-checked" : "fas fa-star rating-star-unchecked"}></i>
            </div>
            <p className='message'>
              {this.props.review.reviewMsg}
            </p>
            <div className='items-ordered'>
              <div className='user-ordered'>
                {this.props.review.username} ordered:
              </div>
              {this.props.review.items.map((item, index) => {
                return (
                  <div key={index} className='item-container'>
                    <div className='item-subcontainer'>
                      <div className='item-name'>{item.itemName} <i className="fas fa-plus"></i></div>                      
                    </div>
                    <div className="push popover__content">
                      <div className="item-info-container">
                        <div className="item-name-price">
                          <span className='item-name'>
                            {item.itemName} 
                          </span>
                          <span className="item-price">
                            ${item.price}
                          </span>
                        </div>
                        <div className="item-description">{item.iDescription}</div>
                      </div>
                      <div className="add-to-bag">Add to bag</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
        </div>
      </li>
    );
  }
}


export default Review;