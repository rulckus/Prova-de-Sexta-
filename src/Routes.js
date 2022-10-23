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
import IniFim from './Pages/IniFim/index'
import Linha from './Pages/Linha/linha'
import Retangulo from './Pages/Retangulo/retangulo'
import Café from './Pages/Café/index'
import Juros from './Pages/Juros/index'

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
              <Route exact path="/contagem" element={<IniFim/>}></Route>
              <Route exact path="/linha" element={<Linha/>}></Route>
              <Route exact path="/retangulo" element={<Retangulo/>}></Route>
              <Route exact path="/cafe" element={<Café/>}></Route>
              <Route exact path="/juros" element={<Juros/>}></Route>

          </Routes>
      </BrowserRouter>
    )
  }