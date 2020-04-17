import packageJson from 'package.json';

export const formatDateToDTG = (date: Date) => {
  const months = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ];

  if (!(date instanceof Date)) date = new Date(date);

  const year = date.getFullYear().toString().substring(2);
  const month: string | number = date.getMonth();

  let day: string | number = date.getDate();
  let hours: string | number = date.getHours();
  let minutes: string | number = date.getMinutes();

  if (day < 10) day = `0${day}`;
  if (hours < 10) hours = `0${hours}`;
  if (minutes < 10) minutes = `0${minutes}`;

  return `${day}${hours}${minutes}${months[month]}${year}`;
};

export const saveToLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const loadFromLocalStorage = (key: string) => {
  let result = localStorage.getItem(key);

  if (typeof result === 'string') {
    if (isJson(result)) {
      return JSON.parse(result);
    } else if (!isNaN(Number(result))) {
      return Number(result);
    }
    return result;
  }

  return undefined;
};

export const isJson = (item: any) => {
  item = typeof item !== 'string' ? JSON.stringify(item) : item;

  try {
    item = JSON.parse(item);
  } catch (e) {
    return false;
  }

  if (typeof item === 'object' && item !== null) {
    return true;
  }

  return false;
};

export const editProperty = <T>(obj: T, path: string, editValue: any) => {
  const properties = path.split('.');

  properties.reduce((prev, curr, index) => {
    if (prev && typeof prev === 'object') {
      if (prev[curr] === undefined) {
        prev[curr] = {};
      }

      if (index + 1 === properties.length && editValue !== undefined) {
        prev[curr] = editValue;
      }

      return prev[curr];
    }

    return undefined;
  }, obj);

  return obj;
};

export const getObjectProperty = (obj: object, path: string) => {
  const properties = path.split('.');

  const result = properties.reduce((prev, curr, index) => {
    if (prev && typeof prev === 'object') {
      if (prev[curr] === undefined) {
        return undefined;
      }

      return prev[curr];
    }

    return undefined;
  }, obj);

  return result;
};
