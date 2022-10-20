import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
        <Link className='link' to='libra'>Libra</Link>
        <Link className='link' to='acai'>Açai</Link>
        <Link className='link' to='peso'>Sorvete</Link>
        <Link className='link' to='salario'>Salario</Link>
        <Link className='link' to='paradas'>Paradas</Link>
        <Link className='link' to='temperatura'>Temperatura</Link>
        <Link className='link' to='cinema'>Cinema</Link>
        <Link className='link' to='orcamento'>Orçamento</Link>
        <Link className='link' to='contagem'>Contagem</Link>
        <Link className='link' to='linha'>Linha</Link>
        <Link className='link' to='retangulo'>Retangulo</Link>
        <Link className='link' to='cafe'>Café</Link>
    </div>
  );
}

export default App;
