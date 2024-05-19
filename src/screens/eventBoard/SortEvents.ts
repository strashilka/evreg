import {EventReg} from '../../date/EventReg';

export function sortEventsBy(ev_array: EventReg[], field: string, isAsc = true) {

  let sortedEvents = [...ev_array];

  if (field === 'title') {
    sortedEvents.sort(compareByTitle);
  } else if (field === 'date') {
    sortedEvents.sort(compareByDate);
  } else if (field === 'organizer') {
    sortedEvents.sort(compareByOrganizer);
  }
  if (!isAsc) {
    sortedEvents.reverse();
  }

  return sortedEvents;
}


// Функция сравнения для сортировки по заголовку
const compareByTitle = (a: EventReg, b: EventReg) => {
  if (a.title < b.title) {
    return -1;
  }
  if (a.title > b.title) {
    return 1;
  }
  return 0;
};

const compareByDate = (a: EventReg, b: EventReg) => {
  if (a.date < b.date) {
    return -1;
  }
  if (a.date > b.date) {
    return 1;
  }
  return 0;
};

const compareByOrganizer = (a: EventReg, b: EventReg) => {
  if (a.organizer < b.organizer) {
    return -1;
  }
  if (a.organizer > b.organizer) {
    return 1;
  }
  return 0;
};


