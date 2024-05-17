import LabelText from '../../components/labelText/LabelText';
import Title from '../../components/title/Title';
import InputField from '../../components/inputField/InputField';
import RadioBox from '../../components/radioBox/RadioBox';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import './RegistrationScreen.css';
import React, {ChangeEvent, FormEvent, useState} from 'react';
import ErrorMessage from '../../components/errorMessage/ErrorMessage';
import axios from 'axios';
import {EventReg} from '../../date/EventReg';
import AppConst from '../../date/Consts';

function RegistrationScreen({evnt, onSave, onCancel}: { evnt: EventReg, onSave: () => void, onCancel: () => void }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    from: '',
    date: new Date(),
    eventId: evnt.id
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    console.log('handleSubmit');
    e.preventDefault();
    setLoading(true);
    setError('Loading');
    // console.log(formData);

    const data = JSON.stringify(formData);
    console.log('before');
    try {
      axios.post(AppConst.endpoint, data).then((r) => {
        setLoading(false);
        if (r.status === 200) {
          //ok
          console.log('OK');
          setError('');
          onSave();
        } else {
          console.log(r.status);
          setError('Saving problem');
          //failed
        }
      });
    } catch (e) {
      console.log(e);
      setLoading(false);
      setError('Saving problem');
    }
  };

  return (
    <div className={'container'}>
      <Title>Event Registration</Title>
      <form onSubmit={handleSubmit}>
        <LabelText text={'Full name'}/>
        <InputField placeholder={'Petro Peresunko'} name={'name'} value={formData.name} onChange={handleChange}/>
        <LabelText text={'Email'}/>
        <InputField placeholder={'me@mynet.ua'} name={'email'} value={formData.email} onChange={handleChange}/>
        <LabelText text={'Date of birth'}/>
        <DatePicker className={'date-field'} selected={formData.date} onChange={(date: Date) => {
          console.log(date);
          // const timestamp = Date.parse(date);
          // const new_date = new Date(timestamp);
          setFormData(prevState => ({
            ...prevState,
            'date': date
          }));
        }}/>
        <LabelText text={'Where did you here about the event?'}/>
        <div className={'row'}>
          <RadioBox values={['Social media', 'Friends', 'Found myself']} name={'from'} value={formData.from}
            onChange={handleChange}/>
        </div>
        <div className={'buttons-container'}>
          {loading || error !== '' ? <ErrorMessage text={error}/> : <ErrorMessage text=" "/>}
          <button onClick={handleSubmit} type={'submit'}>Save</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default RegistrationScreen;