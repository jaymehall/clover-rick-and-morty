import { useParams } from 'react-router-dom'
import { useCharacterLocation } from '../hooks/useCharacterLocation'
import { useCharacters } from '../providers/CharactersProvider'
import { Loading } from './Loading'
import { Error } from './Error'
import { CharacterLocation } from './CharacterLocation'

export const CharacterLocationPage = () => {
  const { characterId } = useParams()
  const { charLoading, charError } = useCharacters()
  const {
    locationLoading,
    locationData,
    locationError,
    char,
  } = useCharacterLocation(characterId)

  return (
    <>
      {locationLoading || charLoading ? <Loading /> : null}
      {locationError ? (
        <Error e={locationError} />
      ) : charError ? (
        <Error e={charError} />
      ) : null}
      {locationData && char ? (
        <CharacterLocation character={char} location={locationData} />
      ) : null}
    </>
  )
}
