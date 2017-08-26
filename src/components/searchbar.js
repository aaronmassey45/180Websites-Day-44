import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: null
    }
  }

  handleChange = (e) => {
    this.setState({ search: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSearchbarSubmit(this.state.search)
  }

  render() {
    return (
      <div className="SearchBar">
        <form onSubmit={this.handleSubmit}>
          <input type="text"
            onChange={this.handleChange}
            value={this.state.value}
            placeholder='Search a pokemon! (lowercase or id)'
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}
