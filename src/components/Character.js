import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export const Character = ({ character }) => {
  return (
    <Card
      component={Link}
      to={`/character/${character.id}`}
      sx={{
        maxWidth: 345,
        display: 'flex',
        margin: '16px 16px',
        flexDirection: 'column',
        border: 'solid 1px black',
        textDecoration: 'none',
      }}
    >
      <CardMedia
        component="img"
        height="300"
        image={character.image}
        alt="character image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {character.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {character.status}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {character.species}
        </Typography>
      </CardContent>
    </Card>
  )
}
