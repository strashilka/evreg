import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Title from '../../components/title/Title';

import {EventReg} from '../../date/EventReg';
import AppConst from '../../date/Consts';
import './ParticipantsScreen.css';
import {EventUser} from '../../date/EventUser';
import ErrorMessage from '../../components/errorMessage/ErrorMessage';


function ParticipantsScreen({event, onClose}: { event: EventReg, onClose: () => void }) {
  // console.log(555)
  const [participants, setParticipants] = useState<EventUser[] | []>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const getParticipants = async () => {
    setLoading(true);
    setError('Loading');

    try {
      axios.get(AppConst.endpoint, {
        params: {
          page: 1,
          limit: 10,
          filter: 'name'
        }
      }).then((r) => {
        setLoading(false);
        if (r.status === 200) {
          const data = r.data;
          const p = [];
          for (const key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) { // Проверяем, является ли свойство собственным
              const participant: EventUser = data[key];
              participant['id'] = key;
              console.log(participant.eventId + ' ' + event.id);
              if (participant.eventId === event.id) p.push(participant);
              // console.log(participant)
            }
          }
          console.log(p);
          setParticipants(p);
          setError('');
          // onClose();
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

  useEffect(() => {
    getParticipants();
  }, []);

  return <div className={'container'}>
    <Title>&#34;{event.title}&#34; participants</Title>
    <div className={'participants-container'}>
      {participants.map((participant) => (
        <div key={participant.id} className={'participant'}>
          <p>{participant.name}</p>
          <p>{participant.email}</p>
        </div>
      ))}
    </div>
    <div className={'row'}>
      {loading && (<ErrorMessage text={error}/>)}
      <button onClick={onClose}>Close</button>
    </div>
  </div>;
}

export default ParticipantsScreen;