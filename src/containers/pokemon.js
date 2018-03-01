import React from 'react';
import {Image, Jumbotron, Grid, Row} from 'react-bootstrap';

function Pokemon(props) {
  const { name, id } = props.data
  return (
    <Jumbotron className="Pokemon animated flipInX">
      <Grid>
        <Row>
          <h1>{`${name.charAt(0).toUpperCase()}${name.slice(1)}`}</h1>
          <h3>Poke ID: {id}</h3>
        </Row>
        <Row>
          <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} className='animated rotateIn'/>
        </Row>
      </Grid>
    </Jumbotron>
  );
}

export default Pokemon;
