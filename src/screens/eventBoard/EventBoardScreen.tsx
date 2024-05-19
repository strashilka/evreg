import Title from '../../components/title/Title';
import EventGridTile from '../../components/eventGridTile/EventGridTile';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import Modal from '../../components/modal/Modal';
import RegistrationScreen from '../registrationScreen/RegistrationScreen';
import ParticipantsScreen from '../participantsScreen/ParticipantsScreen';
import {EventReg} from '../../date/EventReg';
import {sortEventsBy} from './SortEvents';
import EventsData from "../../date/EventsData";
import './EventBoardScreen.css';

const itemsPerPage = 9;

function EventBoardScreen() {
  const [items, setItems] = useState<EventReg[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [index, setIndex] = useState(1);
  const [hasMoreItems, setHasMoreItems] = useState(true)
  const [isRegistrationVisible, setIsRegistrationVisible] = useState(false);
  const [isParticipantsVisible, setIsParticipantsVisible] = useState(false);
  const [currentEvent, setCurrentEvent] = useState<EventReg | null>(null);
  const [sortBy, setSortBy] = useState('none');
  const [isSortAsc, setIsSortAsc] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setItems(EventsData.slice(0, itemsPerPage))
  }, []);

  useEffect(() => {
    if (sortBy !== 'none') {
      let sortedEvents = sortEventsBy(items, sortBy, isSortAsc);
      setItems(sortedEvents)
    }
  }, [sortBy, isSortAsc]);

  function closeModal() {
    setIsRegistrationVisible(false);
    setIsParticipantsVisible(false);
    setCurrentEvent(null);
  }

  function setSortDirection(field: string) {
    setSortBy(field);
    setIsSortAsc((prevState) => !prevState);
  }

  const fetchData = useCallback(async () => {
    if (isLoading || !hasMoreItems) return;
    setIsLoading(true);
    let new_items = EventsData.slice(index * itemsPerPage, index * itemsPerPage + itemsPerPage);
    if (new_items.length === 0) setHasMoreItems(false)
    setItems((prevItems) => [...prevItems, ...new_items]);
    setIndex((prevIndex) => prevIndex + 1);

    setIsLoading(false);
  }, [index, isLoading]);


  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const {scrollTop, clientHeight, scrollHeight} = scrollContainerRef.current;
        if (scrollTop + clientHeight >= scrollHeight - 20) {
          fetchData();
        }
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, [fetchData, items]);


  return (
    <div className={"event-board-container"}>
      <div className={"header"}>
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
      </div>
      {items.length === 0 ? (
        <div>No data</div>
      ) : (
        <div className="scrollable-list">
          <div className={'events-list-container'} ref={scrollContainerRef}>
            {items.map((item) => (
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
    </div>
  );
}

export default EventBoardScreen;
