import React, {useEffect, useState} from 'react';
import EventListScreen from './screens/eventList/EventListScreen';
import {EventReg} from './date/EventReg';
import './App.css';

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
          setEventsReg(data);
          // Здесь вы можете сохранить данные в переменную или выполнить другие действия
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }

    loadData();
  }, []);


  return (
    <div className="App">
      <EventListScreen events={eventsReg}/>
    </div>
  );
}

export default App;
