
import { BrowserRouter, Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import Contacts from './pages/Contacts'
import About from './pages/About'
import Books from './pages/Books'


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/books' element={<Books />} />
          <Route path='/about' element={<About />} />
          <Route path='/contacts' element={<Contacts />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
