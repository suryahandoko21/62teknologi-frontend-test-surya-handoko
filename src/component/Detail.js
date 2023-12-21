import React from 'react';
import Slideshow from './Slideshow';
import ReviewList from './ReviewList';
import RatingMap from './RatingMap';
import { useLocation } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
const Details = () => {
  const location = useLocation();
  const receivedData = location.state?.data || {};
  const latlong = receivedData.latitude+","+receivedData.longitude;
  return (
    <div>
     <Container>
     <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item style={{textDecoration:"none"}} >Detail Business Data
          </Breadcrumb.Item>
       </Breadcrumb>
        <Slideshow image_slide ={receivedData.slide_image}/>
        <ReviewList review={receivedData.ulasan} categories={receivedData.categories} />
        <RatingMap rating={receivedData.rating} latlong={latlong}/>
      </Container>
    </div>
  );
};

export default Details;