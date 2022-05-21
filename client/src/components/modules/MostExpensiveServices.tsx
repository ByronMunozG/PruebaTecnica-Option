import { Table } from '@mantine/core';
import { useQuery } from 'react-query';
import { fetchExpensiveServices } from '../../api';
import { formatter } from '../../utils/currency';
import AnimatedContainer from '../elements/AnimatedContainer';
import CustomLoader from '../elements/CustomLoader';
import ErrorAlert from '../elements/ErrorAlert';

interface IServiceItem {
  id: number;
  category_service: string;
  service_name: string;
  unit_cost: number;
}

const MostExpensiveServices = () => {
  const { data, isLoading, isError, isIdle } = useQuery(
    'expensiveServices',
    fetchExpensiveServices
  );

  if (isLoading || isIdle) return <CustomLoader />;

  return (
    <AnimatedContainer delay={0.4}>
      {isError ? (
        <ErrorAlert />
      ) : (
        <Table verticalSpacing="xs" striped fontSize="lg">
          <thead>
            <tr>
              <th>Categoria</th>
              <th>Nombre</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item: IServiceItem) => (
              <tr key={item.id}>
                <td>{item.category_service}</td>
                <td>{item.service_name}</td>
                <td>{formatter.format(item.unit_cost)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </AnimatedContainer>
  );
};

export default MostExpensiveServices;
