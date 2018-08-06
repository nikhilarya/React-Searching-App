import React from 'react';

const Card = ({ name, email, id }) => {
  return (
    <div className="bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5">
      <img alt="robotimg" src={`https://robohash.org/${id}?100x100`} />
      <div>
        <h1>{name}</h1>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
