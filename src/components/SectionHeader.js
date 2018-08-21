import React from 'react';
import { Link } from 'react-router-dom';

const SectionHeader = (props) => {
  if (props.sub) {
    return (
      <h4 className='sub-section-header'>
        <Link to={props.name.toLowerCase()}>{props.name}</Link>
      </h4>
    );
  } else {
    return (
      <h3 className='section-header'>
        <Link to={props.name.toLowerCase()}>{props.name}</Link>
      </h3>
    );
  }
}

export default SectionHeader;
