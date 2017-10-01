import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grid } from 'react-bootstrap';

import {fetchPokemon, fetchSpeciesData} from '../actions'
import Navbar from '../containers/navbar';
import SearchBar from './searchbar';
import Pokemon from '../containers/pokemon';
import '../App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchPokemon('pikachu');
    this.props.fetchSpeciesData('pikachu');
  }

  render() {
    let { data, description, errMessage } = this.props.appState;

    return (
      <div className="App">
        <Navbar brand="PokeApp!" />
        <Grid>
          <SearchBar />
          {
            !data || !description ?
            (
              errMessage === null  ?
                <div>
                  <h2>Loading...</h2>
                  <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
                </div> :
                <h2>{errMessage}</h2>
            ) :
            <Pokemon data={data} description={description} />
          }
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  appState: state.appState
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({fetchPokemon, fetchSpeciesData}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
