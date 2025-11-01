import React from 'react';

const Grid = ({ children }) => {
  return (<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))' }}>{children}</div>);
};

export default Grid;