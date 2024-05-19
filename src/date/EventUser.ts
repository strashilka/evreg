export class EventUser {
  id: string;
  name: string;
  email: string;
  date: Date;
  registration: Date;
  from: string;
  eventId: string;

  constructor(id: string, name: string, email: string, date: Date, registration: Date, from: string, eventId: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.date = date;
    this.registration = registration;
    this.from = from;
    this.eventId = eventId;
  }
}