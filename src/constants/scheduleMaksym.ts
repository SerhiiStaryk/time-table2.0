import { DAYS } from './days';
import * as L from './lessons';
import { TIME } from './time';

const TIME_TABLE_1 = [
  {
    day: DAYS.mon,
    lessons: [
      { name: L.ZDOROVYA_BEZPEKA_DOBROBUT, time: TIME[5], cab: null },
      { name: L.FIZKULTURA, time: TIME[6] },
      { name: L.UKRAYINSKA_MOVA, time: TIME[7], cab: null },
      { name: L.MATEMATYKA, time: TIME[8], cab: null },
      { name: L.ANHLIYSKA_MOVA, time: TIME[9], cab: null },
      { name: L.NIMETSKA_MOVA, time: TIME[10], cab: null },
    ],
  },
  {
    day: DAYS.tue,
    lessons: [
      { name: L.ZARUBIZHNA_LITERATURA, time: TIME[6], cab: 113 },
      { name: L.MATEMATYKA, time: TIME[7], cab: 301 },
      { name: L.ANHLIYSKA_MOVA, time: TIME[8], cab: '109/303а' },
      { name: L.OBRAZOTVORCHE, time: TIME[9], cab: 116 },
      { name: L.PIZNAYEMO_PRYRODU, time: TIME[10], cab: 202 },
      { name: L.ROBOTOTEKHNIKA, time: TIME[11], cab: '316/302' },
    ],
  },
  {
    day: DAYS.wed,
    lessons: [
      { name: L.VSTUP_DO_ISTORIYI, time: TIME[6], cab: 301 },
      { name: L.UKRAYINSKA_MOVA, time: TIME[7], cab: '114/313' },
      { name: L.MATEMATYKA, time: TIME[8], cab: 113 },
      { name: L.FIZKULTURA, time: TIME[9], cab: null },
      { name: L.TEKHNOLOHIYI, time: TIME[10], cab: '114/116' },
      { name: L.UKRAYINSKA_LITERATURA, time: TIME[11], cab: 314 },
    ],
  },
  {
    day: DAYS.thu,
    lessons: [
      { name: L.KHOREOHRAFIYA, time: TIME[5], cab: null },
      { name: L.UKRAYINSKA_MOVA, time: TIME[6], cab: null },
      { name: L.MATEMATYKA, time: TIME[7], cab: null },
      { name: L.MATEMATYKA, time: TIME[8], cab: null },
      { name: L.ANHLIYSKA_MOVA, time: TIME[9], cab: null },
      { name: L.ANHLIYSKA_MOVA, time: TIME[10], cab: null },
    ],
  },
  {
    day: DAYS.fri,
    lessons: [
      { name: L.UKRAYINSKA_LITERATURA, time: TIME[5], cab: null },
      { name: L.PIZNAYEMO_PRYRODU, time: TIME[6], cab: null },
      { name: L.ANHLIYSKA_MOVA, time: TIME[7], cab: null },
      { name: L.UKRAYINSKA_MOVA, time: TIME[8], cab: null },
      { name: L.INFORMATYKA, time: TIME[9], cab: null },
      { name: L.NIMETSKA_MOVA, time: TIME[10], cab: null },
    ],
  },
];

const TIME_TABLE_2 = [
  {
    day: DAYS.mon,
    lessons: [
      { name: L.ETYKA, time: TIME[4], cab: null },
      { name: L.ZDOROVYA_BEZPEKA_DOBROBUT, time: TIME[5], cab: null },
      { name: L.FIZKULTURA, time: TIME[6], cab: null },
      { name: L.UKRAYINSKA_MOVA, time: TIME[7], cab: null },
      { name: L.MATEMATYKA, time: TIME[8], cab: null },
      { name: L.ANHLIYSKA_MOVA, time: TIME[9], cab: null },
      { name: L.NIMETSKA_MOVA, time: TIME[10], cab: null },
    ],
  },
  {
    day: DAYS.tue,
    lessons: [
      { name: L.ZARUBIZHNA_LITERATURA, time: TIME[6], cab: 113 },
      { name: L.MATEMATYKA, time: TIME[7], cab: 301 },
      { name: L.ANHLIYSKA_MOVA, time: TIME[8], cab: '109/303a' },
      { name: L.MUZYKA, time: TIME[9], cab: 219 },
      { name: L.PIZNAYEMO_PRYRODU, time: TIME[10], cab: 202 },
      { name: L.ROBOTOTEKHNIKA, time: TIME[11], cab: '316/302' },
    ],
  },
  {
    day: DAYS.wed,
    lessons: [
      { name: L.VSTUP_DO_ISTORIYI, time: TIME[6], cab: 301 },
      { name: L.UKRAYINSKA_MOVA, time: TIME[7], cab: '114/313' },
      { name: L.MATEMATYKA, time: TIME[8], cab: 113 },
      { name: L.FIZKULTURA, time: TIME[9], cab: null },
      { name: L.TEKHNOLOHIYI, time: TIME[10], cab: '114/116' },
      { name: L.UKRAYINSKA_LITERATURA, time: TIME[11], cab: 314 },
    ],
  },
  {
    day: DAYS.thu,
    lessons: [
      { name: L.KHOREOHRAFIYA, time: TIME[5], cab: null },
      { name: L.UKRAYINSKA_MOVA, time: TIME[6], cab: null },
      { name: L.MATEMATYKA, time: TIME[7], cab: null },
      { name: L.MATEMATYKA, time: TIME[8], cab: null },
      { name: L.ANHLIYSKA_MOVA, time: TIME[9], cab: null },
      { name: L.ANHLIYSKA_MOVA, time: TIME[10], cab: null },
    ],
  },
  {
    day: DAYS.fri,
    lessons: [
      { name: L.UKRAYINSKA_LITERATURA, time: TIME[5], cab: null },
      { name: L.PIZNAYEMO_PRYRODU, time: TIME[6], cab: null },
      { name: L.ANHLIYSKA_MOVA, time: TIME[7], cab: null },
      { name: L.UKRAYINSKA_MOVA, time: TIME[8], cab: null },
      { name: L.INFORMATYKA, time: TIME[9], cab: null },
      { name: L.NIMETSKA_MOVA, time: TIME[10], cab: null },
    ],
  },
];

export { TIME_TABLE_1, TIME_TABLE_2 };
