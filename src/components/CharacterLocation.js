import { Typography } from '@mui/material'
import { Box } from '@mui/system'

export const CharacterLocation = ({ character, location }) => {
  const scanFailureUnfinishedVar
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ margin: '32px 16px' }}>
        <Typography variant="h3" fontWeight="bold">
          {character.name}
        </Typography>
        <img src={character.image} alt="character" />
      </Box>
      <Box sx={{ margin: '32px 16px' }}>
        {location === 'Unknown' ? (
          <Typography variant="h5">Location Unknown</Typography>
        ) : (
          <>
            <Typography variant="h5">{location.name}</Typography>
            <Typography variant="h5">Type: {location.type}</Typography>
            <Typography variant="h5">
              Dimension: {location.dimension}
            </Typography>
            <Typography variant="h5">
              Number of residents: {location.residents.length}
            </Typography>
          </>
        )}
      </Box>
    </Box>
  )
}
