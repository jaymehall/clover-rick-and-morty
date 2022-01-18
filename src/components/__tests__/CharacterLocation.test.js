import { render, screen } from '@testing-library/react'
import { CharacterLocation } from '../CharacterLocation'

test('renders correct props', () => {
  const character = {
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    name: 'Rick Sanchez',
  }
  const location = {
    name: 'earth',
    type: 'planet',
    dimension: 'Replacement Dimension',
    residents: [1, 2, 3],
  }
  render(<CharacterLocation character={character} location={location} />)
  const locationToBe = screen.getByText(/earth/i)
  const residentsToBe = screen.getByText(/3/i)
  expect(locationToBe).toBeInTheDocument()
  expect(residentsToBe).toBeInTheDocument()
})
