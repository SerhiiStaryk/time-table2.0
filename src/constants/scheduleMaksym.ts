import { DAYS } from './days';
import * as L from './lessons';
import { TIME } from './time';

const LESSONS: {
  [key: string]: { name: string; cab: number | string | null };
} = {
  [L.ZDOROVYA_BEZPEKA_DOBROBUT]: {
    name: L.ZDOROVYA_BEZPEKA_DOBROBUT,
    cab: 313,
  },
  [L.FIZKULTURA]: { name: L.FIZKULTURA, cab: null },
  [L.UKRAYINSKA_MOVA]: { name: L.UKRAYINSKA_MOVA, cab: '313/310' },
  [L.MATEMATYKA]: { name: L.MATEMATYKA, cab: 305 },
  [L.ANHLIYSKA_MOVA]: { name: L.ANHLIYSKA_MOVA, cab: '109/216' },
  [L.NIMETSKA_MOVA]: { name: L.NIMETSKA_MOVA, cab: 316 },
  [L.ZARUBIZHNA_LITERATURA]: { name: L.ZARUBIZHNA_LITERATURA, cab: 113 },
  [L.PIZNAYEMO_PRYRODU]: { name: L.PIZNAYEMO_PRYRODU, cab: 311 },
  [L.ROBOTOTEKHNIKA]: { name: L.ROBOTOTEKHNIKA, cab: '316/302' },
  [L.VSTUP_DO_ISTORIYI]: { name: L.VSTUP_DO_ISTORIYI, cab: 301 },
  [L.TEKHNOLOHIYI]: { name: L.TEKHNOLOHIYI, cab: '114/116' },
  [L.UKRAYINSKA_LITERATURA]: { name: L.UKRAYINSKA_LITERATURA, cab: 306 },
  [L.KHOREOHRAFIYA]: { name: L.KHOREOHRAFIYA, cab: null },
  [L.INFORMATYKA]: { name: L.INFORMATYKA, cab: '205/309' },
  [L.ETYKA]: { name: L.ETYKA, cab: null },
  [L.MUZYKA]: { name: L.MUZYKA, cab: null },
  [L.OBRAZOTVORCHE]: { name: L.OBRAZOTVORCHE, cab: 116 },
};

const TIME_TABLE_1 = [
  {
    day: DAYS.mon,
    lessons: [
      { ...LESSONS[L.ZDOROVYA_BEZPEKA_DOBROBUT], time: TIME[5] },
      { ...LESSONS[L.FIZKULTURA], time: TIME[6] },
      { ...LESSONS[L.UKRAYINSKA_LITERATURA], time: TIME[7] },
      { ...LESSONS[L.MATEMATYKA], time: TIME[8] },
      { ...LESSONS[L.ANHLIYSKA_MOVA], time: TIME[9] },
      { ...LESSONS[L.NIMETSKA_MOVA], time: TIME[10] },
    ],
  },
  {
    day: DAYS.tue,
    lessons: [
      { ...LESSONS[L.ZARUBIZHNA_LITERATURA], time: TIME[6] },
      { ...LESSONS[L.MATEMATYKA], time: TIME[7] },
      { ...LESSONS[L.ANHLIYSKA_MOVA], time: TIME[8] },
      { ...LESSONS[L.UKRAYINSKA_MOVA], time: TIME[9] },
      { ...LESSONS[L.PIZNAYEMO_PRYRODU], time: TIME[10] },
      { ...LESSONS[L.ROBOTOTEKHNIKA], time: TIME[11] },
    ],
  },
  {
    day: DAYS.wed,
    lessons: [
      { ...LESSONS[L.VSTUP_DO_ISTORIYI], time: TIME[6] },
      { ...LESSONS[L.UKRAYINSKA_MOVA], time: TIME[7] },
      { ...LESSONS[L.MATEMATYKA], time: TIME[8] },
      { ...LESSONS[L.FIZKULTURA], time: TIME[9] },
      { ...LESSONS[L.TEKHNOLOHIYI], time: TIME[10] },
      { ...LESSONS[L.UKRAYINSKA_LITERATURA], time: TIME[11] },
    ],
  },
  {
    day: DAYS.thu,
    lessons: [
      { ...LESSONS[L.VSTUP_DO_ISTORIYI], time: TIME[6] },
      { ...LESSONS[L.UKRAYINSKA_MOVA], time: TIME[7], cab: '114/313' },
      { ...LESSONS[L.MATEMATYKA], time: TIME[8], cab: 113 },
      { ...LESSONS[L.FIZKULTURA], time: TIME[9] },
      { ...LESSONS[L.TEKHNOLOHIYI], time: TIME[10] },
      { ...LESSONS[L.UKRAYINSKA_LITERATURA], time: TIME[11], cab: 314 },
    ],
  },
  {
    day: DAYS.fri,
    lessons: [
      { ...LESSONS[L.PIZNAYEMO_PRYRODU], time: TIME[5] },
      { ...LESSONS[L.ANHLIYSKA_MOVA], time: TIME[6] },
      { ...LESSONS[L.UKRAYINSKA_MOVA], time: TIME[7] },
      { ...LESSONS[L.INFORMATYKA], time: TIME[8] },
      { ...LESSONS[L.NIMETSKA_MOVA], time: TIME[9] },
      { ...LESSONS[L.OBRAZOTVORCHE], time: TIME[10] },
    ],
  },
];

const TIME_TABLE_2 = [
  {
    day: DAYS.mon,
    lessons: [
      { ...LESSONS[L.ETYKA], time: TIME[4] },
      { ...LESSONS[L.ZDOROVYA_BEZPEKA_DOBROBUT], time: TIME[5] },
      { ...LESSONS[L.FIZKULTURA], time: TIME[6] },
      { ...LESSONS[L.UKRAYINSKA_LITERATURA], time: TIME[7] },
      { ...LESSONS[L.MATEMATYKA], time: TIME[8] },
      { ...LESSONS[L.ANHLIYSKA_MOVA], time: TIME[9] },
      { ...LESSONS[L.NIMETSKA_MOVA], time: TIME[10] },
    ],
  },
  {
    day: DAYS.tue,
    lessons: [
      { ...LESSONS[L.ZARUBIZHNA_LITERATURA], time: TIME[6] },
      { ...LESSONS[L.MATEMATYKA], time: TIME[7] },
      { ...LESSONS[L.ANHLIYSKA_MOVA], time: TIME[8] },
      { ...LESSONS[L.UKRAYINSKA_MOVA], time: TIME[9] },
      { ...LESSONS[L.PIZNAYEMO_PRYRODU], time: TIME[10] },
      { ...LESSONS[L.ROBOTOTEKHNIKA], time: TIME[11] },
    ],
  },
  {
    day: DAYS.wed,
    lessons: [
      { ...LESSONS[L.VSTUP_DO_ISTORIYI], time: TIME[6] },
      { ...LESSONS[L.UKRAYINSKA_MOVA], time: TIME[7], cab: '114/313' },
      { ...LESSONS[L.MATEMATYKA], time: TIME[8], cab: 113 },
      { ...LESSONS[L.FIZKULTURA], time: TIME[9] },
      { ...LESSONS[L.TEKHNOLOHIYI], time: TIME[10] },
      { ...LESSONS[L.UKRAYINSKA_LITERATURA], time: TIME[11], cab: 314 },
    ],
  },
  {
    day: DAYS.thu,
    lessons: [
      { ...LESSONS[L.KHOREOHRAFIYA], time: TIME[5] },
      { ...LESSONS[L.UKRAYINSKA_MOVA], time: TIME[6], cab: '114/313' },
      { ...LESSONS[L.MATEMATYKA], time: TIME[7], cab: 310 },
      { ...LESSONS[L.MATEMATYKA], time: TIME[8], cab: 315 },
      { ...LESSONS[L.ANHLIYSKA_MOVA], time: TIME[9] },
      { ...LESSONS[L.ANHLIYSKA_MOVA], time: TIME[10] },
    ],
  },
  {
    day: DAYS.fri,
    lessons: [
      { ...LESSONS[L.PIZNAYEMO_PRYRODU], time: TIME[5] },
      { ...LESSONS[L.ANHLIYSKA_MOVA], time: TIME[6] },
      { ...LESSONS[L.UKRAYINSKA_MOVA], time: TIME[7] },
      { ...LESSONS[L.INFORMATYKA], time: TIME[8] },
      { ...LESSONS[L.NIMETSKA_MOVA], time: TIME[9] },
      { ...LESSONS[L.MUZYKA], time: TIME[10] },
    ],
  },
];

export { TIME_TABLE_1, TIME_TABLE_2 };
