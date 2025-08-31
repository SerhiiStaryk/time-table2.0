import * as MaksymSchedule from './scheduleMaksym';
import * as VeronikaSchedule from './scheduleVeronika';
import * as Holidays from './holidays';

export const TIME_TABLE = {
  Maksym: { first: MaksymSchedule.TIME_TABLE_1, second: MaksymSchedule.TIME_TABLE_2 },
  Veronika: { first: VeronikaSchedule.TIME_TABLE_1, second: VeronikaSchedule.TIME_TABLE_2 },
};

export const HOLIDAYS = [
  {
    name: Holidays.KANIKULY_OSINNI,
    start: '21.10.2024',
    end: '25.10.2024',
  },
  {
    name: Holidays.KANIKULY_ZYMOVI,
    start: '23.12.2024',
    end: '07.01.2025',
  },
  {
    name: Holidays.KANIKULY_VESNIANI,
    start: '24.03.2025',
    end: '28.03.2025',
  },
  {
    name: Holidays.VELYKODNI_SVIATKUVANNIA,
    start: '14.04.2025',
    end: '21.04.2025',
  },
];
