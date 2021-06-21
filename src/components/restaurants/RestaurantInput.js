import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor(props){
    super(props)

    this.state = {
      text: ''
    }
  }

  handleOnChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit} >
          <div className='form-group'>
            <input
              type="text"
              value={this.state.text}
              onChange={this.handleOnChange}
              />
          </div>
          <div className='form-group'>
            <input type='submit'/>
          </div>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
