import LabelText from '../labelText/LabelText';
import {ChangeEventHandler} from 'react';

function RadioBox({name, value, values, onChange}: {
  name: string,
  value: string,
  values: string[],
  onChange: ChangeEventHandler<HTMLInputElement> | undefined
}) {
  return <>
    {values.map((val) => {
      return <div key={val}>
        <LabelText text={val}/>
        <input type={'radio'} value={val} name={name} checked={value === val} onChange={onChange}/>
      </div>;
    })}
  </>;
}

export default RadioBox;