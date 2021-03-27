// External dependencies
import React from 'react';
import PropType from 'prop-types';

// Internal dependencies
import CheckedIconComponent from '../assets/svgs/icChecked.svg';
import UncheckedIconComponent from '../assets/svgs/icUnchecked.svg';
import '../styles/components/checkbox.scss';

/**
 * Checkbox component
 * @param {Object} props component properties 
 */
function CheckBoxComponent(props) {
  const { onChange:handleChange, label, id, checked } = props;
  return (
    <label className='sh-checkbox' htmlFor={id}>
      <input 
        type='checkbox' 
        id={id} 
        onChange={handleChange} 
        checked={checked} 
      />
      <CheckedIconComponent className='sh-checkbox__checked'/>
      <UncheckedIconComponent className='sh-checkbox__unchecked' />
      {label && <span className='sh-checkbox__label'>{label}</span>}
    </label>
  );
}

CheckBoxComponent.propTypes = {
  label: PropType.string,
  id: PropType.string,
  checked: PropType.bool,
  onChange:PropType.func
};

export default CheckBoxComponent;