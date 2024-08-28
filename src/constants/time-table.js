import { DAYS } from './days';
import { TIME } from './time';
import * as L from '../constants/lessons';

export const TIME_TABLE_1 = [
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
      { name: L.MATEMATYKA, time: TIME[8] },
      { name: L.YA_DOSLIDZHUYU_SVIT, time: TIME[9] },
      { name: L.KHRYSTYYANSKA_ETYKA, time: TIME[10] },
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
      { name: L.UKRAYINSKA_MOVA, time: TIME[7] },
      { name: L.KHOREOHRAFIYA, time: TIME[8] },
      { name: L.INFORMATYKA, time: TIME[9] },
      { name: L.MATEMATYKA, time: TIME[10] },
      { name: L.YA_DOSLIDZHUYU_SVIT, time: TIME[11] },
    ],
  },
  {
    day: DAYS.fri,
    lessons: [
      { name: L.MATEMATYKA, time: TIME[5] },
      { name: L.YADS_UKRAYINSKA_MOVA, time: TIME[6] },
      { name: L.ANHLIYSKA_MOVA, time: TIME[7] },
      { name: L.UKRAYINSKA_MOVA, time: TIME[8] },
      { name: L.FIZKULTURA, time: TIME[9] },
      { name: L.YA_DOSLIDZHUYU_SVIT, time: TIME[10] },
    ],
  },
];

export const TIME_TABLE_2 = [
  {
    day: DAYS.mon,
    lessons: [
      { name: L.UKRAYINSKA_MOVA, time: TIME[7] },
      { name: L.ANHLIYSKA_MOVA, time: TIME[8] },
      { name: L.MATEMATYKA, time: TIME[9] },
      { name: L.OBRAZOTVORCHE, time: TIME[10] },
      { name: L.YA_DOSLIDZHUYU_SVIT, time: TIME[11] },
    ],
  },
  {
    day: DAYS.tue,
    lessons: [
      { name: L.FIZKULTURA, time: TIME[6] },
      { name: L.UKRAYINSKA_MOVA, time: TIME[7] },
      { name: L.MATEMATYKA, time: TIME[8] },
      { name: L.YA_DOSLIDZHUYU_SVIT, time: TIME[9] },
      { name: L.KHRYSTYYANSKA_ETYKA, time: TIME[10] },
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
      { name: L.KHOREOHRAFIYA, time: TIME[7] },
      { name: L.UKRAYINSKA_MOVA, time: TIME[8] },
      { name: L.INFORMATYKA, time: TIME[9] },
      { name: L.MATEMATYKA, time: TIME[10] },
      { name: L.YA_DOSLIDZHUYU_SVIT, time: TIME[11] },
    ],
  },
  {
    day: DAYS.fri,
    lessons: [
      { name: L.MATEMATYKA, time: TIME[5] },
      { name: L.ANHLIYSKA_MOVA, time: TIME[6] },
      { name: L.YADS_UKRAYINSKA_MOVA, time: TIME[7] },
      { name: L.FIZKULTURA, time: TIME[8] },
      { name: L.UKRAYINSKA_MOVA, time: TIME[9] },
      { name: L.YA_DOSLIDZHUYU_SVIT, time: TIME[10] },
    ],
  },
];

export const TIME_TABLE_OPTIONS = [
  { value: 0, label: 'перша група' },
  { value: 1, label: 'друга група' }
];

export const TIME_TABLE = [TIME_TABLE_1, TIME_TABLE_2];
