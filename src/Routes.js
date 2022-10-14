import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Menu from './App'
import Libra from './Pages/Libra/libra'
import Acai from './Pages/Açai/peso'
import Sorvete from './Pages/Sorvete/acai'
import Salario from './Pages/Salario/salario'
import Paradas from './Pages/Paradas/paradas'
import Temperatura from './Pages/Temperatura/temperatura'
import Cinema from './Pages/Cinema/cinema'
import Orçamento from './Pages/Orçamento/orcamento'

export default function Paths() {
    return (
      <BrowserRouter>
          <Routes>
          <Route exact path="/" element={<Menu/>}></Route>
              <Route exact path="/libra" element={<Libra/>}></Route>
              <Route exact path="/acai" element={<Acai/>}></Route>
              <Route exact path="/peso" element={<Sorvete/>}></Route>
              <Route exact path="/salario" element={<Salario/>}></Route>
              <Route exact path="/paradas" element={<Paradas/>}></Route>
              <Route exact path="/temperatura" element={<Temperatura/>}></Route>
              <Route exact path="/cinema" element={<Cinema/>}></Route>
              <Route exact path="/orcamento" element={<Orçamento/>}></Route>

          </Routes>
      </BrowserRouter>
    )
  }