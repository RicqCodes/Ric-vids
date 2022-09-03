import React from 'react';

const Loader = ({ loading }) => {
  return (
    <div className="loader">
      <div className="ui active dimmer">
        <div className="ui text loader"></div>
      </div>
      <p></p>
    </div>
  );
};

export default Loader;
