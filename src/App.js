import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
        <Link to='libra'>Libra</Link>
        <Link to='acai'>Açai</Link>
        <Link to='peso'>Sorvete</Link>
    </div>
  );
}

export default App;
