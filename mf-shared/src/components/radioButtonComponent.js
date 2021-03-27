// External dependencies
import React from 'react';
import PropType from 'prop-types';

// Internal dependencies
import CheckedIconComponent from '../assets/svgs/icRadioChecked.svg';
import UncheckedIconComponent from '../assets/svgs/icUnchecked.svg';
import '../styles/components/radio.scss';

function RadioButtonComponent(props) {
  const { 
    onChange:handleChange, 
    name, 
    id, 
    checked,
    label 
  } = props;
  return (
    <label htmlFor={id} className='sh-radio'>
      <input 
        type='radio' 
        id={id} 
        name={name} 
        onChange={handleChange} 
        checked={checked}
      />
      <CheckedIconComponent className='sh-radio__checked'/>
      <UncheckedIconComponent className='sh-radio__unchecked' />
      {label && <span className='sh-radio__label'>{label}</span>}
    </label>
  );
}

RadioButtonComponent.propTypes = {
  name: PropType.string,
  label: PropType.string,
  id: PropType.string,
  checked: PropType.bool,
  onChange:PropType.func
};

export default RadioButtonComponent;