import { useEffect, useState } from 'react'
import {
  getCharacterById,
  useCharacters,
} from '../providers/CharactersProvider'

const cache = {}

export const useCharacterLocation = (characterId) => {
  const [locationLoading, setLocationLoading] = useState(false)
  const [locationData, setData] = useState(null)
  const [locationError, setError] = useState(null)
  const [char, setChar] = useState(null)

  const { characters, charLoading } = useCharacters()

  useEffect(() => {
    if (characters.length === 0) {
      return
    }
    if (charLoading) {
      return
    }
    setData(null)
    const character = getCharacterById(characterId)
    setChar(character)
    const charLocationUrl = character.location.url
    if (charLocationUrl === '') {
      setData('Unknown')
      setLocationLoading(false)
      return
    }
    if (cache[charLocationUrl]) {
      setData(cache[charLocationUrl])
      return
    }
    setLocationLoading(true)
    fetch(`${charLocationUrl}`).then((res) => {
      if (res.status >= 400) {
        setError(
          new Error(`error getting location data for ${charLocationUrl}`),
        )
        setLocationLoading(false)
        return
      }
      res
        .json()
        .then((locationData) => {
          cache[charLocationUrl] = locationData
          setData(locationData)
          setLocationLoading(false)
          setError(null)
          return
        })
        .catch((e) => {
          setError(e)
          setLocationLoading(false)
          setData(null)
        })
    })
  }, [characters, charLoading, characterId])

  return { locationLoading, locationData, locationError, char }
}
