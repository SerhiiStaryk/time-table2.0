import { DAYS, TIME } from './date';
import * as L from './lessons';

const TIME_TABLE_1 = [
  {
    day: DAYS.mon,
    lessons: [
      { name: L.ANHLIYSKA_MOVA, time: TIME[7] },
      { name: L.UKRAYINSKA_MOVA, time: TIME[8] },
      { name: L.MATEMATYKA, time: TIME[9] },
      { name: L.OBRAZOTVORCHE, time: TIME[10] },
      { name: L.YA_DOSLIDZHUYU_SVIT, time: TIME[11] },
    ],
  },
  {
    day: DAYS.tue,
    lessons: [
      { name: L.UKRAYINSKA_MOVA, time: TIME[6] },
      { name: L.FIZKULTURA, time: TIME[7] },
      { name: L.ANHLIYSKA_MOVA, time: TIME[8] },
      { name: L.MATEMATYKA, time: TIME[9] },
      { name: L.YA_DOSLIDZHUYU_SVIT, time: TIME[10] },
      { name: L.YADS_UKRAYINSKA_MOVA, time: TIME[11] },
    ],
  },
  {
    day: DAYS.wed,
    lessons: [
      { name: L.YA_DOSLIDZHUYU_SVIT, time: TIME[7] },
      { name: L.YADS_UKRAYINSKA_MOVA, time: TIME[8] },
      { name: L.ANHLIYSKA_MOVA, time: TIME[9] },
      { name: L.UKRAYINSKA_MOVA, time: TIME[10] },
      { name: L.MUZYKA, time: TIME[11] },
    ],
  },
  {
    day: DAYS.thu,
    lessons: [
      { name: L.MATEMATYKA, time: TIME[6] },
      { name: L.UKRAYINSKA_MOVA, time: TIME[7] },
      { name: L.KHOREOHRAFIYA, time: TIME[8] },
      { name: L.INFORMATYKA, time: TIME[9] },
      { name: L.YA_DOSLIDZHUYU_SVIT, time: TIME[10] },
    ],
  },
  {
    day: DAYS.fri,
    lessons: [
      { name: L.MATEMATYKA, time: TIME[6] },
      { name: L.FIZKULTURA, time: TIME[7] },
      { name: L.UKRAYINSKA_MOVA, time: TIME[8] },
      { name: L.KHRYSTYYANSKA_ETYKA, time: TIME[9] },
      { name: L.YA_DOSLIDZHUYU_SVIT, time: TIME[10] },
    ],
  },
];

const TIME_TABLE_2 = [
  {
    day: DAYS.mon,
    lessons: [
      { name: L.UKRAYINSKA_MOVA, time: TIME[6] },
      { name: L.ANHLIYSKA_MOVA, time: TIME[7] },
      { name: L.MATEMATYKA, time: TIME[8] },
      { name: L.OBRAZOTVORCHE, time: TIME[9] },
      { name: L.YA_DOSLIDZHUYU_SVIT, time: TIME[10] },
    ],
  },
  {
    day: DAYS.tue,
    lessons: [
      { name: L.FIZKULTURA, time: TIME[6] },
      { name: L.UKRAYINSKA_MOVA, time: TIME[7] },
      { name: L.YADS_UKRAYINSKA_MOVA, time: TIME[8] },
      { name: L.MATEMATYKA, time: TIME[9] },
      { name: L.YA_DOSLIDZHUYU_SVIT, time: TIME[10] },
      { name: L.ANHLIYSKA_MOVA, time: TIME[11] },
    ],
  },
  {
    day: DAYS.wed,
    lessons: [
      { name: L.YA_DOSLIDZHUYU_SVIT, time: TIME[7] },
      { name: L.MUZYKA, time: TIME[8] },
      { name: L.UKRAYINSKA_MOVA, time: TIME[9] },
      { name: L.ANHLIYSKA_MOVA, time: TIME[10] },
      { name: L.YADS_UKRAYINSKA_MOVA, time: TIME[11] },
    ],
  },
  {
    day: DAYS.thu,
    lessons: [
      { name: L.MATEMATYKA, time: TIME[6] },
      { name: L.KHOREOHRAFIYA, time: TIME[7] },
      { name: L.UKRAYINSKA_MOVA, time: TIME[8] },
      { name: L.INFORMATYKA, time: TIME[9] },
      { name: L.YA_DOSLIDZHUYU_SVIT, time: TIME[10] },
    ],
  },
  {
    day: DAYS.fri,
    lessons: [
      { name: L.MATEMATYKA, time: TIME[6] },
      { name: L.UKRAYINSKA_MOVA, time: TIME[7] },
      { name: L.FIZKULTURA, time: TIME[8] },
      { name: L.KHRYSTYYANSKA_ETYKA, time: TIME[9] },
      { name: L.YA_DOSLIDZHUYU_SVIT, time: TIME[10] },
    ],
  },
];

export const TIME_TABLE = { first: TIME_TABLE_1, second: TIME_TABLE_2 };

export const HOLIDAYS = [
  {
    name: 'Канікули осінні',
    start: '21.10.2024',
    end: '25.10.2024',
  },
  {
    name: 'Канікули зимові',
    start: '23.12.2024',
    end: '07.01.2025',
  },
  {
    name: 'Канікули весняні',
    start: '24.03.2025',
    end: '28.03.2025',
  },
  {
    name: 'Великодні святкування',
    start: '14.04.2025',
    end: '21.04.2025',
  },
];
