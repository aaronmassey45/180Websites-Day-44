import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grid } from 'react-bootstrap';

import { fetchPokemon } from '../actions';
import Navbar from '../containers/navbar';
import SearchBar from './searchbar';
import Pokemon from '../containers/pokemon';
import '../App.css';

class App extends Component {
	componentDidMount() {
		this.props.fetchPokemon('pikachu');
	}

	render() {
		const { data, errMessage } = this.props.pokeData;
    console.log(this.props.pokeData);

		return (
			<div className="App">
				<Navbar brand="PokeApp!" />
				<Grid>
					<SearchBar />
					{!data ? (
						!errMessage ? (
							<div>
								<h2>Loading...</h2>
								<i className="fa fa-spinner fa-pulse fa-3x fa-fw" />
							</div>
						) : (
							<h2>{errMessage}</h2>
						)
					) : (
						<Pokemon data={data} />
					)}
				</Grid>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	pokeData: state.pokeData,
});

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ fetchPokemon }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
