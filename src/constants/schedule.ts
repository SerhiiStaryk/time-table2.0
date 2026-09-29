import * as Holidays from './holidays';
import * as MaksymSchedule from './scheduleMaksym';
import * as VeronikaSchedule from './scheduleVeronika';

export const TIME_TABLE = {
  Maksym: {
    first: MaksymSchedule.TIME_TABLE_1,
    second: MaksymSchedule.TIME_TABLE_2,
  },
  Veronika: {
    first: VeronikaSchedule.TIME_TABLE_1,
    second: VeronikaSchedule.TIME_TABLE_2,
  },
};

export const HOLIDAYS = [
  {
    name: Holidays.KANIKULY_OSINNI,
    start: '26.10.2026',
    end: '30.10.2026',
  },
  {
    name: Holidays.KANIKULY_ZYMOVI,
    start: '24.12.2026',
    end: '08.01.2027',
  },
  {
    name: Holidays.KANIKULY_VESNIANI,
    start: '22.03.2027',
    end: '26.03.2027',
  },
  {
    name: Holidays.VELYKODNI_SVIATKUVANNIA,
    start: '30.04.2027',
    end: '03.05.2027',
  },
];
