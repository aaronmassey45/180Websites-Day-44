import React from 'react';
import {Image, Jumbotron, Grid, Row, Col} from 'react-bootstrap';

function Pokemon(props) {
  //takes object and turns into array entries
  const data = Object.entries(props.data.types);
  //maps through the array and returns the pokemons types
  const types = data.map(type => {
    return <li key={type[1].type.name}>{type[1].type.name}</li>;
  })
  return (
    <Jumbotron className="Pokemon animated flipInX">
      <Grid>
        <Row>
          <h1>{`${props.data.name.charAt(0).toUpperCase()}${props.data.name.slice(1)}`}</h1>
          <h3>Poke ID: {props.data.id}</h3>
        </Row>
        <Row>
          <Image src={props.data.sprites.front_default} className='animated rotateIn'/>
        </Row>
        <Row>
          <p>{props.des}</p>
        </Row>
        <hr/>
        <Row>
          <Col xs={6}><p>Types:</p></Col>
          <Col xs={6}><ul>{types}</ul></Col>
        </Row>
      </Grid>
    </Jumbotron>
  );
}

export default Pokemon;
