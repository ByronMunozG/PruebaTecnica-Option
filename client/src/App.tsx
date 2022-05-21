import { Container, Space } from '@mantine/core';
import Section from './components/layouts/Section';
import MonthlyIncome from './components/modules/MonthlyIncome';
import MonthlyServices from './components/modules/MonthlyServices';
import MostExpensiveServices from './components/modules/MostExpensiveServices';

const App = () => (
  <Container py="xl" size="lg" mb="4rem">
    <Section title="Ingreso Mensual">
      <MonthlyIncome />
    </Section>
    <Space h={64} />
    <Section title="Servicios En El Último Mes">
      <MonthlyServices />
    </Section>
    <Space h={64} />
    <Section title="10 Servicios Más Costosos">
      <MostExpensiveServices />
    </Section>
  </Container>
);

export default App;
