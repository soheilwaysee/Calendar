import { StyleSheet, Platform } from 'react-native';

export const behavior = Platform.OS === 'ios' && 'padding';

export const styleJoiner = (...arg) => StyleSheet.flatten(arg);

export const isFunction = value => typeof value === 'function';

export const replaceItems = (index, items, arr) => [
  ...arr.slice(0, index),
  ...items,
  ...arr.slice(index + 1)
];

export function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x100000000000000)
      .toString(16)
      .substring(1);
  }
  return `${s4().replace(/[^a-z]/gi, '')}`;
}

export const orderDate = state => state.sort((a, b) => a.start - b.start);

export function getDates(days) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  const start = new Date(date.getTime());
  date.setHours(date.getHours() + 3);
  return {
    start,
    end: date.toString()
  };
}

export function sameDay(d1, d2) {
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
}

export const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

export const weekDays = [
  'Sun.',
  'Mon.',
  'Tue.',
  'Wed.',
  'Thu.',
  'Fri.',
  'Sat.'
];
