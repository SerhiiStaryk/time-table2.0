import { LessonTime } from '../types/lessonTime';

type TimeType = Record<number, LessonTime>;
type ScheduleBellsType = Record<string, TimeType>;

export const TIME: TimeType = {
  1: { start: '8:30', end: '9:15' },
  2: { start: '9:25', end: '10:10' },
  3: { start: '10:20', end: '11:05' },
  4: { start: '11:15', end: '12:00' },
  5: { start: '12:15', end: '13:00' },
  6: { start: '13:10', end: '13:50' },
  7: { start: '14:05', end: '14:45' },
  8: { start: '15:05', end: '15:45' },
  9: { start: '16:00', end: '16:40' },
  10: { start: '16:55', end: '17:35' },
  11: { start: '17:50', end: '18:30' },
};

export const TIME_FIRST_CLASSES: TimeType = {
  1: { start: '8:30', end: '9:05' },
  2: { start: '9:25', end: '10:00' },
  3: { start: '10:20', end: '10:55' },
  4: { start: '11:15', end: '11:50' },
  5: { start: '12:15', end: '12:50' },
  6: { start: '13:10', end: '13:45' },
};

export const SCHEDULE_BELLS: ScheduleBellsType = {
  Maksym: TIME,
  Veronika: TIME_FIRST_CLASSES,
};
