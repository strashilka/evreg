import React, {useEffect, useState} from 'react';
import {EventReg} from './date/EventReg';
import EventBoardScreen from './screens/eventBoard/EventBoardScreen';
import './App.css';
import {EventUser} from './date/EventUser';

function App() {
  const [eventsReg, setEventsReg] = useState<EventReg[] | []>([]);
  useEffect(() => {
    async function loadData() {
      fetch('fake_data.json')
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to load JSON file');
          }
          // console.log(response)
          return response.json();
        })
        .then(data => {
          // console.log('JSON data:', data);
          const events: EventReg[] = [];
          for (const dataKey in data) {
            if (Object.prototype.hasOwnProperty.call(data, dataKey)) { // Проверяем, является ли свойство собственным
              const event: EventReg = data[dataKey];
              const dateString = data[dataKey]['date'];
              console.log(dateString);
              event.date = new Date(dateString);
              console.log(event);
              // console.log(participant.eventId + ' ' + event.id);
              // if (participant.eventId === event.id) p.push(participant);
              // console.log(participant)
              events.push(event);
            }
          }
          setEventsReg(events);
          console.log(data);
          // Здесь вы можете сохранить данные в переменную или выполнить другие действия
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }

    loadData();
  }, []);


  return (
    <>
      <EventBoardScreen events={eventsReg}/>
    </>
  );
}

export default App;
