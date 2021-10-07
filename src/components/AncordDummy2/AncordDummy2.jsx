import PropTypes from 'prop-types';
import React from 'react';
import "./ancordDummy2.css"

const AncordDummy2 = ({ href, text, weight = 'font-medium' }) => {
  return (
    <a href={href} className={`ancordR ${weight}`}>
      {text}
    </a>
  );
}

AncordDummy2.propTypes = {
  href: PropTypes.string,
  weight: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default AncordDummy2