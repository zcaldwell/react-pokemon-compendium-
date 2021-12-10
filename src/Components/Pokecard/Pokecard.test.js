import { render } from '@testing-library/react';
import PokeCard from './Pokecard';

test('renders the PokeCard', () => {
  const container = render(
    <PokeCard
      url_image="blah"
      pokemon="pikachu"
      type_1="electric"
      speed="slow"
      attack="blah blah"
      defense="blah"
    />
  );
  expect(container).toMatchSnapshot();
});
