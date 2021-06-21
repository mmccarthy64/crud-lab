import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
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
    this.props.addReview({ text: this.state.text, restaurantId: this.props.restaurantId })
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <div className='form-group'>
            <input
              type='text'
              value={this.state.text}
              onChange={this.handleOnChange}
              />
            <div className='form-group'>
              <input type='submit' />
            </div>
          </div>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
