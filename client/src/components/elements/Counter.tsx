import { Text } from '@mantine/core';
import { animate } from 'framer-motion';
import { FC, useEffect, useRef } from 'react';
import { formatter } from '../../utils/currency';

interface ICounterProps {
  from?: number;
  to: number;
}

const Counter: FC<ICounterProps> = ({ from = 0, to }) => {
  const counterRef = useRef<HTMLParagraphElement>(null!);

  useEffect(() => {
    const counter = counterRef.current;

    const controls = animate(from, to, {
      duration: 1,
      onUpdate(value) {
        counter.textContent = formatter.format(value);
      },
    });

    return () => controls.stop();
  }, [from, to]);

  return <Text style={{ fontSize: '2rem' }} weight="bold" ref={counterRef} color="cyan" />;
};

export default Counter;
