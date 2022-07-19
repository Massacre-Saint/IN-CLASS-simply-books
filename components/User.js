/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';

function User({
  image, name, email, lastLogin,
}) {
  return (
    <div>
      <img src={image} alt={name} />
      <h1>{name}</h1>
      <h3>{email}</h3>
      <h4>{lastLogin}</h4>
    </div>
  );
}

User.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string,
  lastLogin: PropTypes.string,
};
User.defaultProps = {
  image: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Howard_Zinn%2C_2009_%28cropped%29.jpg',
  name: 'Jacob Martin',
  email: 'jacob95martin@gmail.com',
  lastLogin: '07/16/2022',
};
export default User;
