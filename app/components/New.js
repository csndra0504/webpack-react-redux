import React, { PropTypes } from 'react';

const New = ({params}) =>
  <div>
    Welcome the the NEW route!
    <p>ID: {params.id ? params.id : 'No ID given'}</p>
  </div>;

New.propTypes = {
    params: PropTypes.object
};


export default New;
