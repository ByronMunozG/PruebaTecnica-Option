import { FC } from 'react';
import { Card, Group, Text, ThemeIcon } from '@mantine/core';
import { IoTrendingUpOutline } from 'react-icons/io5';
import Counter from './Counter';

interface IStatisticsProps {
  name: string;
  total: number;
}

const Statistic: FC<IStatisticsProps> = ({ name, total }) => (
  <Card radius="lg" px="xl" shadow="md">
    <Text size="lg">{name}</Text>
    <Group align="center" noWrap>
      <Counter to={total} />
      <ThemeIcon variant="outline" style={{ border: 'none', fontSize: 64, fontWeight: 'bold' }}>
        <IoTrendingUpOutline />
      </ThemeIcon>
    </Group>
  </Card>
);

export default Statistic;
