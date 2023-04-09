import './App.css'
import { Navbar } from './components/Navbar'
import { Shop } from './pages/Shop'
import { SearchContextProvider } from './components/Search'

function App() {

  return (
    <div className="App">
      <SearchContextProvider>
        <Navbar />
        <Shop />
      </SearchContextProvider>
    </div>
  )
}

export default App
