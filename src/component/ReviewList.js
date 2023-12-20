import React from 'react';
import { Link } from 'react-router-dom';
const ReviewList = (props) => {
  const reviews = props?.review||[];
  const categories = props?.categories||[];
  console.log("sss",props.categories);
  return (
    <div>
      <Link to='/' >
              kembali halaman utama
      </Link>
      <h3>Ulasan</h3>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>{review.text}</li>
        ))}
      </ul>
      <h3>Categories</h3>
      <ul>
        {categories.map((categori) => (
          <li >{categori}</li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewList;