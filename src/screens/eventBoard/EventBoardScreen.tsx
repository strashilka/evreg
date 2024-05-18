import Title from '../../components/title/Title';
import EventGridTile from '../../components/eventGridTile/EventGridTile';
import React, {useEffect, useState} from 'react';
import Modal from '../../components/modal/Modal';
import RegistrationScreen from '../registrationScreen/RegistrationScreen';
import ParticipantsScreen from '../participantsScreen/ParticipantsScreen';
import {EventReg} from '../../date/EventReg';
import {sortEventsBy} from './SortEvents';
import './EventBoardScreen.css';

function EventBoardScreen({events}: { events: EventReg[] | [] }) {
  const [isRegistrationVisible, setIsRegistrationVisible] = useState(false);
  const [isParticipantsVisible, setIsParticipantsVisible] = useState(false);
  const [currentEvent, setCurrentEvent] = useState<EventReg | null>(null);
  const [sortBy, setSortBy] = useState('none');
  const [isSortAsc, setIsSortAsc] = useState(true);

  useEffect(() => {

    if (sortBy !== 'none') {
      console.log('SORT ' + sortBy + ' ' + isSortAsc);
      // let res =
      sortEventsBy(events, sortBy, isSortAsc);
      // events= res;
      console.log(events[0].title);
    }
  }, [sortBy, isSortAsc]);

  function closeModal() {
    setIsRegistrationVisible(false);
    setIsParticipantsVisible(false);
    setCurrentEvent(null);
  }

  function toggleRegistration(ev: EventReg) {
    setIsRegistrationVisible((prevState) => !prevState);
  }

  function setSortDirection(field: string) {
    setSortBy(field);
    setIsSortAsc((prevState) => !prevState);
  }

  // console.log(sortBy + " " + isSortAsc)

  return (
    <>
      <Title>Events</Title>
      <div className={'sort-block'}>Sort by:
        <a href="#" onClick={() => {
          setSortDirection('title');
        }}>
          title {isSortAsc && sortBy === 'title' ? '\u2191' : sortBy === 'title' ? '\u2193' : ''}
        </a>&nbsp;
        <a href={'#'} onClick={() => {
          setSortDirection('date');
        }}>
          date {(isSortAsc && sortBy === 'date') ? '\u2191' : (sortBy === 'date') ? '\u2193' : ''}
        </a>&nbsp;
        <a href={'#'} onClick={() => {
          setSortDirection('organizer');
        }}>
          organizer {(isSortAsc && sortBy === 'organizer') ? '\u2191' : (sortBy === 'organizer') ? '\u2193' : ''}
        </a> &nbsp;
      </div>
      {events.length === 0 ? (
        <div>No data</div>
      ) : (
        <div className="scrollable-list">
          <div className={'events-list-container'}>
            {events.map((item) => (
              <EventGridTile
                ev={item}
                key={item.id}
                onRegistrationClick={(ev) => {
                  setCurrentEvent(ev);
                  setIsRegistrationVisible(true);
                }}
                onViewClick={(ev) => {
                  setCurrentEvent(ev);
                  setIsParticipantsVisible(true);
                }}
              />
            ))}
          </div>
        </div>
      )}

      {isRegistrationVisible && currentEvent && (<Modal>
        <RegistrationScreen event={currentEvent} onSave={closeModal} onCancel={closeModal}/>
      </Modal>)}

      {isParticipantsVisible && currentEvent && (<Modal>
        <ParticipantsScreen event={currentEvent} onClose={closeModal}/>
      </Modal>)}
    </>
  );
}

export default EventBoardScreen;
