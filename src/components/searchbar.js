import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {fetchPokemon, fetchSpeciesData} from '../actions'

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ''
    }
  }

  handleChange = (e) => {
    this.setState({ search: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.fetchPokemon(this.state.search.toLowerCase());
    this.props.fetchSpeciesData(this.state.search.toLowerCase());
    this.setState({ search: '' })
  }

  render() {
    return (
      <div className="SearchBar">
        <form onSubmit={this.handleSubmit}>
          <input type="text"
            onChange={this.handleChange}
            value={this.state.search}
            placeholder='Search a pokemon by name or id!'
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({fetchPokemon, fetchSpeciesData}, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar);
