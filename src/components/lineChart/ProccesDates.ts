import {EventUser} from "../../date/EventUser";

type EventCountByDate = { [date: string]: number }; // Тип для объекта подсчета событий по датам

const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`.toString();
};

const getDateRange = (startDate: string, endDate: string) => {
  const dateArray: string[] = [];
  let currentDate = new Date(startDate);

  while (currentDate <= new Date(endDate)) {
    dateArray.push(formatDate(new Date(currentDate)));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dateArray;
};

const eventCountByDate = (eventDates: string[]): EventCountByDate => {
  return eventDates.reduce((acc: EventCountByDate, date: string) => {
    if (!acc[date]) {
      acc[date] = 0;
    }
    acc[date]++;
    return acc;
  }, {});
};


export default function ProcessDates(participants: EventUser[]) {
  let eventDates: string[] = participants.map((participant) => formatDate(participant.registration));
  const eventCounts = eventCountByDate(eventDates);

  const maxDate = eventDates.sort().reverse()[0];
  const minDate = eventDates.sort()[0];
  const fullDateRange = getDateRange(minDate, maxDate);

  return fullDateRange.map(formattedDate => {
    return {
      date: formattedDate,
      count: eventCounts[formattedDate] || 0
    };
  });
}