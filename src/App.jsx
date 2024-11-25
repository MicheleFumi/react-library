
import { BrowserRouter, Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import Contacts from './pages/Contacts'
import About from './pages/About'
import Books from './pages/Books'
import DefaultLayout from './pages/DefaultLayout'



function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/books' element={<Books />} />
            <Route path='/about' element={<About />} />
            <Route path='/contacts' element={<Contacts />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
