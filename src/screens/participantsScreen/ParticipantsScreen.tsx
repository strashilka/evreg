import React, {ChangeEvent, useEffect, useState} from 'react';
import axios from 'axios';
import Title from '../../components/title/Title';
import {EventReg} from '../../date/EventReg';
import AppConst from '../../date/Consts';
import {EventUser} from '../../date/EventUser';
import ErrorMessage from '../../components/errorMessage/ErrorMessage';
import './ParticipantsScreen.css';

function ParticipantsScreen({event, onClose}: { event: EventReg, onClose: () => void }) {
  const [participants, setParticipants] = useState<EventUser[] | []>([]);
  const [visibleParticipants, setVisibleParticipants] = useState<EventUser[] | []>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchText, setSearchText] = useState('');

  const getParticipants = async () => {
    setLoading(true);
    setError('Loading');

    try {
      axios.get(AppConst.endpoint, {
        params: {
          page: 1,
          limit: 100,
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
              if (participant.eventId === event.id) p.push(participant);
            }
          }
          setParticipants(p);
          setVisibleParticipants(p);
          setError('');
        } else {
          setError('Saving problem');
        }
      });
    } catch (e) {
      setLoading(false);
      setError('Saving problem');
    }
  };

  useEffect(() => {
    getParticipants();
  }, []);

  useEffect(() => {
    const searched_text = searchText.toUpperCase();
    const filteredArray = participants.filter(participant =>
      participant.name.toUpperCase().includes(searched_text)
      || participant.email.toUpperCase().includes(searched_text)
    );
    setVisibleParticipants(filteredArray);
  }, [searchText]);

  function search(value: string) {
    setSearchText(value);
  }

  return <div className={'container'}>
    <Title>&#34;{event.title}&#34; participants</Title>
    <div className={'search-block'}><p>Search: <input name={'search-text'} value={searchText}
      onChange={(t: ChangeEvent<HTMLInputElement>) => {
        console.log(t);
        const {value} = t.target;
        search(value);
      }}/></p></div>
    <div className={'participants-container'}>
      {visibleParticipants.map((participant) => (
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