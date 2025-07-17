import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Create from './components/Create'
import Update from './components/Update'

const App = ()=>{

  return(
    <BrowserRouter>

      <Navbar />

      <Routes>

          <Route path='/' exact element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/update/:id' element={<Update />} />
          <Route />
      </Routes>
        
    </BrowserRouter>
  )
}

export default App