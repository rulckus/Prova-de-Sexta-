import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Menu from './App'
import Libra from './Pages/Libra/libra'
import Acai from './Pages/Açai/peso'
import Sorvete from './Pages/Sorvete/acai'

export default function Paths() {
    return (
      <BrowserRouter>
          <Routes>
          <Route exact path="/" element={<Menu/>}></Route>
              <Route exact path="/libra" element={<Libra/>}></Route>
              <Route exact path="/acai" element={<Acai/>}></Route>
              <Route exact path="/peso" element={<Sorvete/>}></Route>
          </Routes>
      </BrowserRouter>
    )
  }