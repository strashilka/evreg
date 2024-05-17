import Title from '../../components/title/Title';
import EventGridTile from '../../components/eventGridTile/EventGridTile';
import React, {useState} from 'react';
import Modal from '../../components/modal/Modal';
import RegistrationScreen from '../registrationScreen/RegistrationScreen';
import ParticipantsScreen from '../participantsScreen/ParticipantsScreen';
import {EventReg} from '../../date/EventReg';
import './EventListScreen.css';

function EventListScreen({events}: { events: EventReg[] | [] }) {
  const [isRegistrationVisible, setIsRegistrationVisible] = useState(false);
  const [isParticipantsVisible, setIsParticipantsVisible] = useState(false);
  const [currentEvent, setCurrentEvent] = useState<EventReg | null>(null);

  function closeModal() {
    setIsRegistrationVisible(false);
    setIsParticipantsVisible(false);
    setCurrentEvent(null);
  }

  return (
    <>
      <Title>Events</Title>
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
        <RegistrationScreen evnt={currentEvent} onSave={closeModal} onCancel={closeModal}/>
      </Modal>)}

      {isParticipantsVisible && currentEvent && (<Modal>
        <ParticipantsScreen event={currentEvent} onClose={closeModal}/>
      </Modal>)}
    </>
  );
}

export default EventListScreen;