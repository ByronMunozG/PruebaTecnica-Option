import { render, screen } from '../../../tests/test-utils';
import MonthlyIncome from './MonthlyIncome';

test('on initial render the component is loading', () => {
  render(<MonthlyIncome />);
  expect(screen.getByTestId('custom-loader')).toBeInTheDocument();
});
