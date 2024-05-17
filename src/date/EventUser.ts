export class EventUser {
  id: string;
  name: string;
  email: string;
  date: Date;
  from: string;
  eventId: string;

  constructor(id: string, name: string, email: string, date: Date, from: string, eventId: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.date = date;
    this.from = from;
    this.eventId = eventId;
  }
}