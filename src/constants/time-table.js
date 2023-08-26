import { DAYS } from './days';
import { TIME } from './time';

export const TIME_TABLE_1 = [
  {
    day: DAYS.mon,
    isToday: true,
    lessons: [
      { name: 'Я досліджую світ', time: TIME[1] },
      { name: 'Математика', time: TIME[2] },
      { name: 'Українська мова', time: TIME[3] },
      { name: 'Фізкультура', time: TIME[4] },
      { name: 'Образотворче', time: TIME[5] },
    ],
  },
  {
    day: DAYS.tue,
    lessons: [
      { name: 'Інформатика', time: TIME[1] },
      { name: 'Матиматика', time: TIME[2] },
      { name: 'Я досліджую світ', time: TIME[3] },
      { name: 'Англійська мова', time: TIME[4] },
      { name: 'Українська мова', time: TIME[5] },
    ],
    isToday: false,
  },
  {
    day: DAYS.wed,
    isToday: false,
    lessons: [
      { name: 'Я досліджую світ', time: TIME[1] },
      { name: 'Християнська етика', time: TIME[2] },
      { name: 'Математика', time: TIME[3] },
      { name: 'Українська мова', time: TIME[4] },
      { name: 'Фізкультура', time: TIME[5] },
    ],
  },
  {
    day: DAYS.thu,
    isToday: false,
    lessons: [
      { name: 'Я досліджую світ', time: TIME[1] },
      { name: 'Українська мова', time: TIME[2] },
      { name: 'Українська (ЯДС)', time: TIME[3] },
      { name: 'Хореографія', time: TIME[4] },
      { name: 'Англійська мова', time: TIME[5] },
    ],
  },
  {
    day: DAYS.fri,
    isToday: false,
    lessons: [
      { name: 'Українська (ЯДС)', time: TIME[1] },
      { name: 'Музика', time: TIME[2] },
      { name: 'Англійська мова', time: TIME[3] },
      { name: 'Я досліджую світ', time: TIME[4] },
      { name: 'Українська мова', time: TIME[5] },
    ],
  },
];

export const TIME_TABLE_2 = [
  {
    day: DAYS.mon,
    isToday: true,
    lessons: [
      { name: 'Я досліджую світ', time: TIME[1] },
      { name: 'Математика', time: TIME[2] },
      { name: 'Фізкультура', time: TIME[3] },
      { name: 'Українська мова', time: TIME[4] },
      { name: 'Образотворче', time: TIME[5] },
    ],
  },
  {
    day: DAYS.tue,
    lessons: [
      { name: 'Інформатика', time: TIME[1] },
      { name: 'Матиматика', time: TIME[2] },
      { name: 'Я досліджую світ', time: TIME[3] },
      { name: 'Українська мова', time: TIME[4] },
      { name: 'Англійська мова', time: TIME[5] },
    ],
    isToday: false,
  },

  {
    day: DAYS.wed,
    isToday: false,
    lessons: [
      { name: 'Я досліджую світ', time: TIME[1] },
      { name: 'Християнська етика', time: TIME[2] },
      { name: 'Математика', time: TIME[3] },
      { name: 'Фізкультура', time: TIME[4] },
      { name: 'Українська мова', time: TIME[5] },
    ],
  },
  {
    day: DAYS.thu,
    isToday: false,
    lessons: [
      { name: 'Я досліджую світ', time: TIME[1] },
      { name: 'Англійська мова', time: TIME[2] },
      { name: 'Хореографія', time: TIME[3] },
      { name: 'Українська (ЯДС)', time: TIME[4] },
      { name: 'Українська мова', time: TIME[5] },
    ],
  },
  {
    day: DAYS.fri,
    isToday: false,
    lessons: [
      { name: 'Музика', time: TIME[1] },
      { name: 'Українська (ЯДС)', time: TIME[2] },
      { name: 'Українська мова', time: TIME[3] },
      { name: 'Я досліджую світ', time: TIME[4] },
      { name: 'Англійська мова', time: TIME[5] },
    ],
  },
];

export const TIME_TABLE_OPTIONS = [
  { value: 0, label: 'перша група' },
  { value: 1, label: 'друга група' }
]

export const TIME_TABLE = [TIME_TABLE_1, TIME_TABLE_2]