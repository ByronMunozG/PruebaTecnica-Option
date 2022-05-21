import { useMantineTheme } from '@mantine/core';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartDataset,
} from 'chart.js';
import { useMemo } from 'react';
import { Bar } from 'react-chartjs-2';
import { useQuery } from 'react-query';
import { fetchMonthlyServices } from '../../api';
import AnimatedContainer from '../elements/AnimatedContainer';
import CustomLoader from '../elements/CustomLoader';
import ErrorAlert from '../elements/ErrorAlert';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
ChartJS.defaults.color = '#C1C2C5';

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
  },
};

const MonthlyServices = () => {
  const { data, isLoading, isError, isIdle } = useQuery<Record<string, number>>(
    'services',
    fetchMonthlyServices
  );
  const theme = useMantineTheme();

  const chartData: ChartData<'bar'> = useMemo(() => {
    let labels: string[] = [];
    let datasets: ChartDataset<'bar'>[] = [];
    if (data) {
      labels = Object.keys(data);
      datasets = [
        {
          label: 'Cantidad',
          data: Object.keys(data).map((key) => data[key]),
          backgroundColor: theme.colors.cyan['5'],
        },
      ];
    }
    return { labels, datasets };
  }, [data]);

  if (isLoading || isIdle) return <CustomLoader />;

  if (isError) return <ErrorAlert />;

  return (
    <AnimatedContainer size="lg" delay={0.2}>
      <Bar data={chartData} options={options} />
    </AnimatedContainer>
  );
};

export default MonthlyServices;
