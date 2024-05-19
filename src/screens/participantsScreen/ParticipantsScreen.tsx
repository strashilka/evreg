import React, {ChangeEvent, useEffect, useState} from 'react';
import axios from 'axios';
import Title from '../../components/title/Title';
import {EventReg} from '../../date/EventReg';
import AppConst from '../../date/Consts';
import {EventUser} from '../../date/EventUser';
import ErrorMessage from '../../components/errorMessage/ErrorMessage';
import './ParticipantsScreen.css';
import LineChart from "../../components/lineChart/LineChart";

function ParticipantsScreen({event, onClose}: { event: EventReg, onClose: () => void }) {
  const [participants, setParticipants] = useState<EventUser[] | []>([]);
  const [visibleParticipants, setVisibleParticipants] = useState<EventUser[] | []>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchText, setSearchText] = useState('');

  const getParticipants = async () => {
    setLoading(true);
    setError('Loading');

    // https://rebus-411ca-default-rtdb.europe-west1.firebasedatabase.app/events.json?eventId=6647191a3c5735de10b7dfdf&print=pretty&orderBy=%22eventId%22&limitToLast=10&equalTo=%226647191a3c5735de10b7dfdf%22
    try {
      axios.get(AppConst.participantsEndpoint, {
        params: {
          orderBy: '"eventId"',
          equalTo: '"' + event.id + '"'
        }
      }).then((r) => {
        setLoading(false);
        if (r.status === 200) {
          const data = r.data
          // console.log(data)
          const p = [];
          for (const key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) { // Проверяем, является ли свойство собственным
              const participant: EventUser = data[key];
              participant['id'] = key;
              participant.registration = new Date(participant['registration'])
              // console.log(participant)
              p.push(participant)
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

  return <div className={'screen-container'}>
    <Title>&#34;{event.title}&#34; participants</Title>
    <div className={'search-block'}><p>Search name or e-mail: <input name={'search-text'} value={searchText}
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
          <p>{participant.registration.getDate()}.
            {participant.registration.getMonth() + 1}.
            {participant.registration.getFullYear()}</p>
        </div>
      ))}
    </div>
    <div>
      <LineChart participants={participants}/>
    </div>
    <div className={'row'}>
      {loading && (<ErrorMessage text={error}/>)}
      <button onClick={onClose}>Close</button>
    </div>
  </div>;
}

export default ParticipantsScreen;