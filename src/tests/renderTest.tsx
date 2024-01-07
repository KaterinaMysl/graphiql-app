import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { setupListeners } from '@reduxjs/toolkit/query';
import { render } from '@testing-library/react';
import { setupStore } from '../redux/store';
import { LocalizationProvider } from '../localization/LocalizationContext';
import { BrowserRouter } from 'react-router-dom';

export default function renderWithProviders(
  ui: React.ReactElement,
  { store = setupStore(), ...renderOptions } = {}
) {
  setupListeners(store.dispatch);

  function Wrapper({ children }: PropsWithChildren<unknown>): JSX.Element {
    return (
      <LocalizationProvider>
        <Provider store={store}>
          <BrowserRouter>{children}</BrowserRouter>
        </Provider>
      </LocalizationProvider>
    );
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
