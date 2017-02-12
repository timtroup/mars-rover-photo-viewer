import React, { PropTypes } from 'react'

const CameraPicker = ({ value, onChange, options }) => (
    <span>
    <select onChange={e => onChange(e.target.value)}
            value={value}>
      {options.map(option =>
          <option value={option.abbreviation} key={option.abbreviation}>
              {option.camera}
          </option>)
      }
    </select>
  </span>
);

CameraPicker.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.object.isRequired
    ).isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default CameraPicker