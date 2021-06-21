import React, {Component} from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {

  render() {
    const restaurantList = this.props.restaurants.map( restaurant => {
      return(
        <Restaurant key={restaurant.id}
        restaurant={restaurant}
        deleteRestaurant={this.props.deleteRestaurant} />)
      })
    
    return(
      <ul>
        {restaurantList}
      </ul>
    )
  }
};

export default Restaurants;