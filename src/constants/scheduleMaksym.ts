import { DAYS, TIME } from './date';
import * as L from './lessons';

const TIME_TABLE_1 = [
  {
    day: DAYS.mon,
    lessons: [
      { name: L.YA_DOSLIDZHUYU_SVIT, time: TIME[1] },
      { name: L.YADS_UKRAYINSKA_MOVA, time: TIME[2] },
      { name: L.ANHLIYSKA_MOVA, time: TIME[3] },
      { name: L.FIZKULTURA, time: TIME[4] },
      { name: L.UKRAYINSKA_MOVA, time: TIME[5] },
    ],
  },
  {
    day: DAYS.tue,
    lessons: [
      { name: L.YA_DOSLIDZHUYU_SVIT, time: TIME[1] },
      { name: L.MATEMATYKA, time: TIME[2] },
      { name: L.UKRAYINSKA_MOVA, time: TIME[3] },
      { name: L.KHOREOHRAFIYA, time: TIME[4] },
      { name: L.ANHLIYSKA_MOVA, time: TIME[5] },
    ],
  },
  {
    day: DAYS.wed,
    lessons: [
      { name: L.UKRAYINSKA_MOVA, time: TIME[1] },
      { name: L.FIZKULTURA, time: TIME[2] },
      { name: L.INFORMATYKA, time: TIME[3] },
      { name: L.YA_DOSLIDZHUYU_SVIT, time: TIME[4] },
      { name: L.OBRAZOTVORCHE, time: TIME[5] },
    ],
  },
  {
    day: DAYS.thu,
    lessons: [
      { name: L.YADS_UKRAYINSKA_MOVA, time: TIME[1] },
      { name: L.MUZYKA, time: TIME[2] },
      { name: L.MATEMATYKA, time: TIME[3] },
      { name: L.ANHLIYSKA_MOVA, time: TIME[4] },
      { name: L.UKRAYINSKA_MOVA, time: TIME[5] },
      { name: L.YA_DOSLIDZHUYU_SVIT, time: TIME[6] },
    ],
  },
  {
    day: DAYS.fri,
    lessons: [
      { name: L.YA_DOSLIDZHUYU_SVIT, time: TIME[1] },
      { name: L.MATEMATYKA, time: TIME[2] },
      { name: L.ANHLIYSKA_MOVA, time: TIME[3] },
      { name: L.MATEMATYKA, time: TIME[4] },
      { name: L.UKRAYINSKA_MOVA, time: TIME[5] },
    ],
  },
];

const TIME_TABLE_2 = [
  {
    day: DAYS.mon,
    lessons: [
      { name: L.YA_DOSLIDZHUYU_SVIT, time: TIME[1] },
      { name: L.FIZKULTURA, time: TIME[2] },
      { name: L.UKRAYINSKA_MOVA, time: TIME[3] },
      { name: L.FIZKULTURA, time: TIME[4] },
      { name: L.ANHLIYSKA_MOVA, time: TIME[5] },
    ],
  },
  {
    day: DAYS.tue,
    lessons: [
      { name: L.YA_DOSLIDZHUYU_SVIT, time: TIME[1] },
      { name: L.MATEMATYKA, time: TIME[2] },
      { name: L.ANHLIYSKA_MOVA, time: TIME[3] },
      { name: L.KHOREOHRAFIYA, time: TIME[4] },
      { name: L.UKRAYINSKA_MOVA, time: TIME[5] },
    ],
  },
  {
    day: DAYS.wed,
    lessons: [
      { name: L.FIZKULTURA, time: TIME[1] },
      { name: L.UKRAYINSKA_MOVA, time: TIME[2] },
      { name: L.INFORMATYKA, time: TIME[3] },
      { name: L.YA_DOSLIDZHUYU_SVIT, time: TIME[4] },
      { name: L.OBRAZOTVORCHE, time: TIME[5] },
    ],
  },
  {
    day: DAYS.thu,
    lessons: [
      { name: L.MUZYKA, time: TIME[1] },
      { name: L.YADS_UKRAYINSKA_MOVA, time: TIME[2] },
      { name: L.MATEMATYKA, time: TIME[3] },
      { name: L.UKRAYINSKA_MOVA, time: TIME[4] },
      { name: L.ANHLIYSKA_MOVA, time: TIME[5] },
      { name: L.YA_DOSLIDZHUYU_SVIT, time: TIME[6] },
    ],
  },
  {
    day: DAYS.fri,
    lessons: [
      { name: L.YA_DOSLIDZHUYU_SVIT, time: TIME[1] },
      { name: L.MATEMATYKA, time: TIME[2] },
      { name: L.UKRAYINSKA_MOVA, time: TIME[3] },
      { name: L.MATEMATYKA, time: TIME[4] },
      { name: L.ANHLIYSKA_MOVA, time: TIME[5] },
    ],
  },
];

export { TIME_TABLE_1, TIME_TABLE_2 };
