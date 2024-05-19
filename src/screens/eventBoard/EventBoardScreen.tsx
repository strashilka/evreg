import Title from '../../components/title/Title';
import EventGridTile from '../../components/eventGridTile/EventGridTile';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import Modal from '../../components/modal/Modal';
import RegistrationScreen from '../registrationScreen/RegistrationScreen';
import ParticipantsScreen from '../participantsScreen/ParticipantsScreen';
import {EventReg} from '../../date/EventReg';
import {sortEventsBy} from './SortEvents';
import './EventBoardScreen.css';
import axios from "axios";
import AppConst from "../../date/Consts";
import InfiniteScroll from "react-infinite-scroll-component";

const itemsPerPage = 9;

function EventBoardScreen({events}: { events: EventReg[] | [] }) {
  const [items, setItems] = useState<EventReg[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [index, setIndex] = useState(0);
  const [isRegistrationVisible, setIsRegistrationVisible] = useState(false);
  const [isParticipantsVisible, setIsParticipantsVisible] = useState(false);
  const [currentEvent, setCurrentEvent] = useState<EventReg | null>(null);
  const [sortBy, setSortBy] = useState('none');
  const [isSortAsc, setIsSortAsc] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // axios.get(AppConst.eventsEndpoint, {
    //   params: {
    //     startAt: 0,
    //     endAt: 4,
    //     orderBy: '"title"',
    //     // limitToLast: 4,
    //   }
    // })
    //   .then((res) => setItems(res.data))
    //   .catch((err) => console.log(err));
    // console.log(555)
    setItems(events.slice(0, itemsPerPage))
  }, [events]);

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

  const fetchData = useCallback(async () => {
    if (isLoading) return;

    setIsLoading(true);


    let new_items = events.slice(index * itemsPerPage, index * itemsPerPage + itemsPerPage);
    console.log(new_items)
    new_items.length > 0 ? setHasMore(true) : setHasMore(false);
    setItems((prevItems) => [...prevItems, ...new_items]);
    setIndex((prevIndex) => prevIndex + 1);

    // axios
    //   .get(`https://api.escuelajs.co/api/v1/products?offset=${index}0&limit=12`)
    //   .then((res) => {
    //     setItems((prevItems) => [...prevItems, ...res.data]);
    //   })
    //   .catch((err) => console.log(err));
    // setIndex((prevIndex) => prevIndex + 1);

    setIsLoading(false);
  }, [index, isLoading]);


  useEffect(() => {
    console.log("useEffect")
    const handleScroll = () => {
      console.log("handleScroll")
      if (scrollContainerRef.current) {
        const {scrollTop, clientHeight, scrollHeight} = scrollContainerRef.current;
        if (scrollTop + clientHeight >= scrollHeight - 20) {
          fetchData();
        }
      }
    };

    const scrollContainer = scrollContainerRef.current;
    console.log(scrollContainer)
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, [fetchData, items]);

  // console.log(sortBy + " " + isSortAsc)

  // return (
  //   <InfiniteScroll
  //     dataLength={items.length}
  //     next={fetchMoreData}
  //     hasMore={hasMore}
  //     loader={<div>Loading</div>}
  //   >
  //     <div className='container'>
  //       <div className='row'>
  //         {items &&
  //           items.map((item) =>
  //             <EventGridTile ev={item} key={item.id} onRegistrationClick={(ev) => {
  //               setCurrentEvent(ev);
  //               setIsRegistrationVisible(true);
  //             }}
  //                            onViewClick={(ev) => {
  //                              setCurrentEvent(ev);
  //                              setIsParticipantsVisible(true);
  //                            }}/>)}
  //       </div>
  //     </div>
  //   </InfiniteScroll>
  // );


  /*  return (
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
        {events.length === 0 ? (
          <div>No data</div>
        ) : (
          <div className="scrollable-list">
            <InfiniteScroll
              className="events-list-container"
              dataLength={items.length}
              next={fetchMoreData}
              hasMore={hasMore}
              loader={<div>Loading</div>}
            >
              {items &&
                items.map((item) =>
                  <EventGridTile ev={item} key={item.id} onRegistrationClick={(ev) => {
                    setCurrentEvent(ev);
                    setIsRegistrationVisible(true);
                  }}
                                 onViewClick={(ev) => {
                                   setCurrentEvent(ev);
                                   setIsParticipantsVisible(true);
                                 }}/>)}
            </InfiniteScroll>
          </div>
        )}

        {isRegistrationVisible && currentEvent && (<Modal>
          <RegistrationScreen event={currentEvent} onSave={closeModal} onCancel={closeModal}/>
        </Modal>)}

        {isParticipantsVisible && currentEvent && (<Modal>
          <ParticipantsScreen event={currentEvent} onClose={closeModal}/>
        </Modal>)}
      </div>
    );*/


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
      {events.length === 0 ? (
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
