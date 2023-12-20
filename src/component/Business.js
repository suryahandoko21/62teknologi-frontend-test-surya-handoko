import React from 'react';
import Tables from './Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import businesData from './business.json';

const Business = () => {
  return(
    <Container fluid>
      <Row>
        <Tables data={businesData} />
    </Row>
    </Container>
  )
};

export default Business;