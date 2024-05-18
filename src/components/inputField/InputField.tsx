import React, {ChangeEventHandler} from 'react';
import './InputField.css';

function InputField({name, value, placeholder, onChange}: {
  name: string,
  value: string,
  placeholder: string,
  onChange: ChangeEventHandler<HTMLInputElement> | undefined
}) {
  return <div>
    <input
      name={name}
      placeholder={placeholder}
      value={value}
      // onFocus={toggleVisibility}
      className="input-field"
      onChange={onChange}
    />
  </div>;
}

export default InputField;
