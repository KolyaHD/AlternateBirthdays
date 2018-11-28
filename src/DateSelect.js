import React from 'react';
import {
  Text,
} from 'react-native';
import { Calendar } from 'react-native-calendars';

const DateSelect = ({ onSelect }) => (
  <Calendar
    onDayPress={onSelect}
  />
);

export default DateSelect;