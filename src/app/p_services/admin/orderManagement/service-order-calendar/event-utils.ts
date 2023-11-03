import { EventInput } from '@fullcalendar/angular';

let eventGuid = 0;
const TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today
var result = new Date();
result.setDate(result.getDate() + 2);
const TODAY_STRONW = result.toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today

export const INITIAL_EVENTS: EventInput[] = [
  {
    id: createEventId(),
    title: 'All-day event',
    start: TODAY_STR
  },
  {
    id: createEventId(),
    title: 'Timed event',
    start: TODAY_STR + 'T12:00:00',
    end: TODAY_STRONW + 'T18:00:00'
  }
];

export function createEventId() {
  return String(eventGuid++);
}
