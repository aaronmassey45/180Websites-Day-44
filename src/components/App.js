import React, { Component } from 'react';
import axios from 'axios';
import Navbar from '../containers/navbar';
import SearchBar from './searchbar';
import Pokemon from '../containers/pokemon';
import '../App.css';

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: null,
      des: null
    }
    this.pokemonSubmit('pikachu');
  }

  pokemonSubmit = (pokemon) => {
    if (this.state.data) {
      this.setState({
        data: null,
        des: null
      })
    }
    const URL = 'http://pokeapi.co/api/v2/pokemon/';
    axios.get(`${URL}${pokemon}/`).then((res) => {
      axios.get(res.data.species.url).then((res2) => {
        this.setState({
          data: res.data,
          des: res2.data.flavor_text_entries[1].flavor_text
        });
      });
    }).catch(err => {
      alert('That pokemon does not exist, try again!');
      this.pokemonSubmit('magikarp');
      console.log(err);
    });
  }

  render() {
    let { data,des } = this.state;
    if (!data) {
      return (
        <div className="App">
          <Navbar />
          <p>Loading...</p>
          <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
        </div>
      );
    }
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <SearchBar onSearchbarSubmit={this.pokemonSubmit}/>
          <Pokemon data={data} des={des} />
        </div>
      </div>
    );
  }
}
