import React from 'react';
const RatingMap = (r) => {
  const mapLink = 'https://maps.google.com/?q='+r.latlong;
  return (
    <div>
      <h2>Rating   </h2>
      <p>Rating: {r.rating}</p>
      <p>
        Lihat di{' '}
        <a href={mapLink} target="_blank" rel="noopener noreferrer">
          Google Maps
        </a>
      </p>
    </div>
  );
};

export default RatingMap;