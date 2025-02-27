import './App.css'
import { CharactersProvider } from './providers/CharactersProvider'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Main } from './components/Main'
import { CharacterLocationPage } from './components/CharacterLocationPage'


EditForScanFailure

function App() {
  return (
    <CharactersProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="character">
            <Route path=":characterId" element={<CharacterLocationPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CharactersProvider>
  )
}

export default App
