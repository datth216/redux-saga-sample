import { useEffect, useState } from 'react';

import studentApi from 'api/studentApi';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectCount } from './counterSlice';

export function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  useEffect(() => {
    // cityApi.getAll().then((city) => console.log(city));
    studentApi.getAll({}).then((student) => console.log(student));
  });

  return <h1>Hello</h1>;
}
