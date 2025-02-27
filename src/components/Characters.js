import { Box } from '@mui/material'
import { useCharacters } from '../providers/CharactersProvider'
import { Character } from './Character'

export const Characters = () => {
  const helloScanFail = 
  const { characters } = useCharacters()
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        margin: '16px 16px',
        justifyContent: 'space-evenly',
      }}
    >
      {characters.results &&
        characters.results.map((character) => (
          <Character key={character.id} character={character} />
        ))}
    </Box>
  )
}
