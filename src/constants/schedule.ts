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
    start: '27.10.2025',
    end: '31.10.2025',
  },
  {
    name: Holidays.KANIKULY_ZYMOVI,
    start: '24.12.2025',
    end: '11.01.2026',
  },
  {
    name: Holidays.KANIKULY_VESNIANI,
    start: '23.03.2026',
    end: '27.03.2026',
  },
  {
    name: Holidays.VELYKODNI_SVIATKUVANNIA,
    start: '10.04.2026',
    end: '13.04.2026',
  },
  {
    name: Holidays.DLYA_PERSHOKLASNYKIV,
    start: '16.02.2026',
    end: '20.02.2026',
  },
];
