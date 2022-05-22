import { describe, expect, it } from 'vitest';

import App from './App';

import { render, screen } from '../tests/test-utils';

describe('App Tests', () => {
  it('the monthly income title is visible', () => {
    render(<App />);

    const monthlyIncomeTitle = screen.getByText(/Ingreso Mensual/i);

    screen.debug(monthlyIncomeTitle);

    expect(monthlyIncomeTitle).toBeInTheDocument();
  });
});
