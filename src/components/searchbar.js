import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TextField, RaisedButton } from 'material-ui';

import { fetchPokemon } from '../actions';

class SearchBar extends Component {
	state = {
		search: '',
	};

	handleChange = e => {
		this.setState({ search: e.target.value });
	};

	handleSubmit = async e => {
		e.preventDefault();
		const pokeData = await this.props.fetchPokemon(this.state.search.toLowerCase());
		if (pokeData.error) return null;
		this.setState({ search: '' });
	};

	render() {
		return (
			<div className="SearchBar">
				<form onSubmit={this.handleSubmit}>
					<TextField onChange={this.handleChange} value={this.state.search} floatingLabelText="Search a pokemon by name or id!" />
					<RaisedButton label="Submit" primary={true} type="submit" />
				</form>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ fetchPokemon }, dispatch);
};

export default connect(null, mapDispatchToProps)(SearchBar);
