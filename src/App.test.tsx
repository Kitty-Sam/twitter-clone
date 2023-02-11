import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { WrappedApp, App } from './App';

describe('App', () => {
  it('Render Vite world', () => {
    render(<WrappedApp />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Vite World'
    );
  });

  it('Render not fond if invalid path', () => {
    render(
      <MemoryRouter initialEntries={['/this-route-does-not-exist']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Page not found'
    );
  });
});
