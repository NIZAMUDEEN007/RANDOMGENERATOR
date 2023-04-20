import React from 'react';
import './HeaderDown.css';
import 'animate.css';

const HeaderDown = ({ category }) => {
 

  return (
    <div className="header-down" style={{ fontFamily: category.fontFamily ,color:category.color}}>
      <div className="header-down-text">{"RANDOM " +  category.value.toUpperCase() + " GENERATOR"}</div>
    </div>
  );
};

export default HeaderDown;