import * as L from './lessons';
import { DAYS } from './days';
import { TIME_FIRST_CLASSES } from './time';

const TIME_TABLE_1 = [
  {
    day: DAYS.mon,
    lessons: [
      { name: L.YADS_PRYRODA, time: TIME_FIRST_CLASSES[1] },
      { name: L.UKRAYINSKA_MOVA, time: TIME_FIRST_CLASSES[2] },
      { name: L.ANHLIYSKA_MOVA, time: TIME_FIRST_CLASSES[3] },
      { name: L.MATEMATYKA, time: TIME_FIRST_CLASSES[4] },
    ],
  },
  {
    day: DAYS.tue,
    lessons: [
      { name: L.YADS_PRYRODA, time: TIME_FIRST_CLASSES[1] },
      { name: L.YADS_UKRAYINSKA_MOVA, time: TIME_FIRST_CLASSES[2] },
      { name: L.FIZKULTURA, time: TIME_FIRST_CLASSES[3] },
      { name: L.UKRAYINSKA_MOVA, time: TIME_FIRST_CLASSES[4] },
      { name: L.MUZYKA, time: TIME_FIRST_CLASSES[5] },
    ],
  },
  {
    day: DAYS.wed,
    lessons: [
      { name: L.YADS_UKRAYINSKA_MOVA, time: TIME_FIRST_CLASSES[1] },
      { name: L.ANHLIYSKA_MOVA, time: TIME_FIRST_CLASSES[2] },
      { name: L.YADS_MATEMATYKA, time: TIME_FIRST_CLASSES[3] },
      { name: L.UKRAYINSKA_MOVA, time: TIME_FIRST_CLASSES[4] },
      { name: L.KHOREOHRAFIYA, time: TIME_FIRST_CLASSES[5] },
    ],
  },
  {
    day: DAYS.thu,
    lessons: [
      { name: L.UKRAYINSKA_MOVA, time: TIME_FIRST_CLASSES[1] },
      { name: L.MATEMATYKA, time: TIME_FIRST_CLASSES[2] },
      { name: L.FIZKULTURA, time: TIME_FIRST_CLASSES[3] },
      { name: L.YADS_TRUD_NAV, time: TIME_FIRST_CLASSES[4] },
    ],
  },
  {
    day: DAYS.fri,
    lessons: [
      { name: L.YADS_PRYRODA, time: TIME_FIRST_CLASSES[1] },
      { name: L.MATEMATYKA, time: TIME_FIRST_CLASSES[2] },
      { name: L.OBRAZOTVORCHE, time: TIME_FIRST_CLASSES[3] },
      { name: L.UKRAYINSKA_MOVA, time: TIME_FIRST_CLASSES[4] },
      { name: L.ANHLIYSKA_MOVA, time: TIME_FIRST_CLASSES[5] },
    ],
  },
];

const TIME_TABLE_2 = [
  {
    day: DAYS.mon,
    lessons: [
      { name: L.YADS_PRYRODA, time: TIME_FIRST_CLASSES[1] },
      { name: L.ANHLIYSKA_MOVA, time: TIME_FIRST_CLASSES[2] },
      { name: L.UKRAYINSKA_MOVA, time: TIME_FIRST_CLASSES[3] },
      { name: L.MATEMATYKA, time: TIME_FIRST_CLASSES[4] },
    ],
  },
  {
    day: DAYS.tue,
    lessons: [
      { name: L.YADS_PRYRODA, time: TIME_FIRST_CLASSES[1] },
      { name: L.FIZKULTURA, time: TIME_FIRST_CLASSES[2] },
      { name: L.YADS_UKRAYINSKA_MOVA, time: TIME_FIRST_CLASSES[3] },
      { name: L.MUZYKA, time: TIME_FIRST_CLASSES[4] },
      { name: L.UKRAYINSKA_MOVA, time: TIME_FIRST_CLASSES[5] },
    ],
  },
  {
    day: DAYS.wed,
    lessons: [
      { name: L.ANHLIYSKA_MOVA, time: TIME_FIRST_CLASSES[1] },
      { name: L.YADS_UKRAYINSKA_MOVA, time: TIME_FIRST_CLASSES[2] },
      { name: L.YADS_MATEMATYKA, time: TIME_FIRST_CLASSES[3] },
      { name: L.KHOREOHRAFIYA, time: TIME_FIRST_CLASSES[4] },
      { name: L.UKRAYINSKA_MOVA, time: TIME_FIRST_CLASSES[5] },
    ],
  },
  {
    day: DAYS.thu,
    lessons: [
      { name: L.FIZKULTURA, time: TIME_FIRST_CLASSES[1] },
      { name: L.MATEMATYKA, time: TIME_FIRST_CLASSES[2] },
      { name: L.UKRAYINSKA_MOVA, time: TIME_FIRST_CLASSES[3] },
      { name: L.YADS_TRUD_NAV, time: TIME_FIRST_CLASSES[4] },
    ],
  },
  {
    day: DAYS.fri,
    lessons: [
      { name: L.YADS_PRYRODA, time: TIME_FIRST_CLASSES[1] },
      { name: L.MATEMATYKA, time: TIME_FIRST_CLASSES[2] },
      { name: L.OBRAZOTVORCHE, time: TIME_FIRST_CLASSES[3] },
      { name: L.ANHLIYSKA_MOVA, time: TIME_FIRST_CLASSES[4] },
      { name: L.UKRAYINSKA_MOVA, time: TIME_FIRST_CLASSES[5] },
    ],
  },
];

export { TIME_TABLE_1, TIME_TABLE_2 };
