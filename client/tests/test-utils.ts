import { render } from '@testing-library/react';
import AppProvider from '../src/components/context/App.provider';

const customRender = (ui: JSX.Element, options = {}) =>
  render(ui, {
    wrapper: AppProvider,
    ...options,
  });

export * from '@testing-library/react';

export { default as userEvent } from '@testing-library/user-event';

// override render export

export { customRender as render };
