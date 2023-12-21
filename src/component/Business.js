import React from 'react';
import Tables from './Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import businesData from './business.json';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
const Business = () => {
  return(
    <Container fluid>
       <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#">
            Data
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Business Data</Breadcrumb.Item>
       </Breadcrumb>
      <Row>
        <Tables data={businesData} />
    </Row>
    </Container>
  )
};

export default Business;