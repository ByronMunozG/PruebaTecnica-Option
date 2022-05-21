import { useQuery } from 'react-query';
import { SimpleGrid } from '@mantine/core';

import { fetchMonthlyIncome } from '../../api';
import Statistic from '../elements/Statistic';
import ErrorAlert from '../elements/ErrorAlert';
import AnimatedContainer from '../elements/AnimatedContainer';
import CustomLoader from '../elements/CustomLoader';

interface IMonthlyIncome {
  aceite: number;
  bencina: number;
  lavado: number;
  presion: number;
}

const MonthlyIncome = () => {
  const { data, isLoading, isError, isIdle } = useQuery<IMonthlyIncome>(
    'income',
    fetchMonthlyIncome
  );

  if (isLoading || isIdle) return <CustomLoader />;

  return (
    <AnimatedContainer size="xl">
      {isError ? (
        <ErrorAlert />
      ) : (
        <SimpleGrid cols={4} pt="2.5rem" spacing="xl">
          <Statistic name="Bencina" total={data.bencina} />
          <Statistic name="Aceite" total={data.aceite} />
          <Statistic name="Aire" total={data.presion} />
          <Statistic name="Lavado" total={data.lavado} />
        </SimpleGrid>
      )}
    </AnimatedContainer>
  );
};
export default MonthlyIncome;
