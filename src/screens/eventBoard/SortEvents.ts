import {EventReg} from '../../date/EventReg';

export function sortEventsBy(ev_array: EventReg[], field: string, isAsc = true) {
  if (field === 'title') {
    ev_array.sort(compareByTitle);
  } else if (field === 'date') {
    ev_array.sort(compareByDate);
  } else if (field === 'organizer') {
    // console.log("organizer")
    ev_array.sort(compareByOrganizer);
  } else {
    console.log('NONE-------------');
  }

  if (!isAsc) ev_array.reverse();

  // return ev_array;

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


