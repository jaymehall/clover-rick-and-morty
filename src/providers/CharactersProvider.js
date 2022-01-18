import { createContext, useContext, useEffect, useMemo, useState } from 'react'

export const charactersContext = createContext({
  characters: [],
})

const URL = 'https://rickandmortyapi.com/api/character'

const charMap = {}

export const getCharacterById = (id) => {
  return charMap[id]
}
export const CharactersProvider = ({ children }) => {
  const [characters, setCharacters] = useState([])
  const [charLoading, setCharLoading] = useState(null)
  const [charError, setCharError] = useState(null)

  useEffect(() => {
    setCharLoading(true)
    fetch(URL).then((res) => {
      if (res.status >= 400) {
        setCharError(new Error(`error getting data for characters`))
        setCharLoading(false)
        return
      }
      res
        .json()
        .then((charactersData) => {
          setCharacters(charactersData)
          charactersData.results.forEach((char) => {
            if (!charMap[char.id]) {
              charMap[char.id] = char
            }
          })
          setCharLoading(false)
          setCharError(null)
          return
        })
        .catch((e) => {
          setCharError(e)
          setCharLoading(false)
          setCharacters(null)
        })
    })
  }, [])

  const value = useMemo(
    () => ({
      characters,
      charLoading,
      charError,
    }),
    [characters, charLoading, charError],
  )
  return (
    <charactersContext.Provider value={value}>
      {children}
    </charactersContext.Provider>
  )
}

export const useCharacters = () => useContext(charactersContext)
