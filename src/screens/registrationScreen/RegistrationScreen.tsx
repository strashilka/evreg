import LabelText from '../../components/labelText/LabelText';
import Title from '../../components/title/Title';
import InputField from '../../components/inputField/InputField';
import RadioBox from '../../components/radioBox/RadioBox';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import React, {ChangeEvent, FormEvent, useState} from 'react';
import ErrorMessage from '../../components/errorMessage/ErrorMessage';
import axios from 'axios';
import {EventReg} from '../../date/EventReg';
import AppConst from '../../date/Consts';
import './RegistrationScreen.css';

function RegistrationScreen({event, onSave, onCancel}: { event: EventReg, onSave: () => void, onCancel: () => void }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    from: '',
    date: new Date(),
    registration: new Date(),
    eventId: event.id
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

  function checkFormFill() {
    let isFillCorrect = true;
    if (formData.name.trim().length === 0) {
      setError('Please, fill Full name');
      isFillCorrect = false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Check you email');
      isFillCorrect = false;
    }

    const today = new Date();
    const eighteenYearsAgo = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());

    if (formData.date > eighteenYearsAgo) {
      setError('Check birthday, you must be 18 years');
      isFillCorrect = false;
    }

    return isFillCorrect;
  }

  const handleCancel = async (e: FormEvent) => {
    e.preventDefault();
    onCancel();
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    if (!checkFormFill()) {
      console.log('EXIT');
      return;
    }

    console.log('handleSubmit');
    setLoading(true);
    setError('Loading');
    // console.log(formData);

    const data = JSON.stringify(formData);
    console.log('before');
    try {
      axios.post(AppConst.participantsEndpoint, data).then((r) => {
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
        <LabelText text={'Full name'} isRequired={true}/>
        <InputField placeholder={'Petro Less'} name={'name'} value={formData.name} onChange={handleChange}/>
        <LabelText text={'Email'} isRequired={true}/>
        <InputField placeholder={'me@mynet.ua'} name={'email'} value={formData.email} onChange={handleChange}/>
        <LabelText text={'Date of birth'} isRequired={true}/>
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
          <button onClick={handleCancel}>Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegistrationScreen;