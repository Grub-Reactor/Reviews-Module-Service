import { shallow, mount, render } from 'enzyme';
import React from 'react';
import Review from '../../client/src/components/Review.jsx';
import ReviewList from '../../client/src/components/ReviewList.jsx';
import Summary from '../../client/src/components/Summary.jsx';

const reviews = [{createdAt: "2018-09-01T07:00:00.000Z",
id: 1,
restId: 12,
restaurantId: 12,
restaurantName: "Kitava",
reviewMsg: "Voluptatem provident explicabo veritatis officiis at.",
reviewsCount: 1,
userId: 1,
userRating: 0,
username: "Malachi.Brown",
wasDeliveredOnTime: 0,
wasFoodGood: 0,
wasOrderAccurate: 1,
items: [
  {
    iDescription: "Quis aut nam ratione quod.",
    id: 18,
    itemId: 18,
    itemName: "Chilli",
    price: 83,
    reviewId: 1
  }, 
  {
    iDescription: "sdfsdfsdfsdfsdfdsf.",
    id: 12,
    itemId: 12,
    itemName: "Pizza",
    price: 83,
    reviewId: 1
  } 
]
},
{createdAt: "2018-09-01T07:00:00.000Z",
  id: 1,
  restId: 12,
  restaurantId: 12,
  restaurantName: "Kitava",
  reviewMsg: "Voluptatem provident explicabo veritatis officiis at.",
  reviewsCount: 1,
  userId: 1,
  userRating: 0,
  username: "Malachi.Brown",
  wasDeliveredOnTime: 0,
  wasFoodGood: 0,
  wasOrderAccurate: 1,
  items: [
    {
      iDescription: "Quis aut nam ratione quod.",
      id: 18,
      itemId: 18,
      itemName: "Chilli",
      price: 83,
      reviewId: 1
    }, 
    {
      iDescription: "sdfsdfsdfsdfsdfdsf.",
      id: 12,
      itemId: 12,
      itemName: "Pizza",
      price: 83,
      reviewId: 1
    } 
  ]
}]

describe('Review Component', () => {
  it('should render a <li />', () => {
    const wrapper = shallow(<Review key={1} review={reviews[0]}/>);
    expect(wrapper.find('li').length).toEqual(1);
  });

  it('should render a <h6 />', () => {
    const wrapper = shallow(<Review key={1} review={reviews[0]}/>);
    expect(wrapper.find('h6').length).toEqual(2);
  });

  // <div className='review-info'>
  it('should render a <div />', () => {
    const wrapper = shallow(<Review key={1} review={reviews[0]}/>);
    expect(wrapper.find('div').length).toEqual(30);
  });

});

describe('ReviewList Component', () => {
  it('should render a <ol />', () => {
    const wrapper = shallow(<ReviewList key={1} reviews={reviews}/>);
    expect(wrapper.find('ol').length).toEqual(1);
  });

});

describe('Summary Component', () => {
  it('should render a <div />', () => {
    const wrapper = shallow(
    <Summary 
      reviews={reviews}
      percentageFoodGood={80} 
      percentageFoodOnTime={80} 
      percentageOrderAccurate={80} 
      ratingavg={80}
    />);
    expect(wrapper.find('div').length).toEqual(13);
  });

});