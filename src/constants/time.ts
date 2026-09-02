import { LessonTime } from '../types/lessonTime';

type TimeType = Record<number, LessonTime>;
type ScheduleBellsType = Record<string, TimeType>;

export const TIME: TimeType = {
  1: { start: '8:30', end: '9:15' },
  2: { start: '9:25', end: '10:10' },
  3: { start: '10:20', end: '11:05' },
  4: { start: '11:15', end: '12:00' },
  5: { start: '12:15', end: '13:00' },
  6: { start: '13:10', end: '13:55' },
  7: { start: '14:05', end: '14:50' },
  8: { start: '15:05', end: '15:50' },
  9: { start: '16:00', end: '16:45' },
  10: { start: '16:55', end: '17:40' },
  11: { start: '17:50', end: '18:35' },
};

export const TIME_FIRST_CLASSES: TimeType = {
  1: { start: '8:30', end: '9:10' },
  2: { start: '9:25', end: '10:05' },
  3: { start: '10:20', end: '11:00' },
  4: { start: '11:15', end: '11:55' },
  5: { start: '12:15', end: '12:55' },
  6: { start: '13:10', end: '13:50' },
};

export const SCHEDULE_BELLS: ScheduleBellsType = {
  Maksym: TIME,
  Veronika: TIME_FIRST_CLASSES,
};
