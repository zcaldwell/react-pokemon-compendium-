import { render } from '@testing-library/react';
import PokeList from './Pokelist';

test('renders pokemon list', () => {
  const container = render(<PokeList pokemon={['pikachu']} />);
  expect(container).toMatchSnapshot();
});
