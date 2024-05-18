import './EventGridTile.css';
import {EventReg} from '../../date/EventReg';
import {formatDate} from '../../date/Utils';

function EventGridTile({ev, onRegistrationClick, onViewClick}: {
  ev: EventReg,
  onRegistrationClick: (ev: EventReg) => void | undefined,
  onViewClick: (ev: EventReg) => void | undefined,
}) {

  return (
    <div className='event-container'>
      <p className="event-title">{ev.title}</p>
      <p className="description">{ev.description}</p>
      <p className="event-title">{ev.organizer}, {formatDate(ev.date)}</p>
      <div className="links-container">
        <button className={'link'} onClick={() => {
          onRegistrationClick(ev);
        }}>Register
        </button>
        <button className={'link'} onClick={() => {
          onViewClick(ev);
        }}>View
        </button>
      </div>
    </div>
  );
}

export default EventGridTile;

