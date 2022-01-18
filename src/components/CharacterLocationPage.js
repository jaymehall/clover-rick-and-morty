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
      {locationLoading && <Loading />}
      {charLoading && <Loading />}
      {locationError && <Error />}
      {charError && <Error />}
      {locationData && char ? (
        <CharacterLocation character={char} location={locationData} />
      ) : (
        <Error />
      )}
    </>
  )
}
