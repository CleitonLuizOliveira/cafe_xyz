import './App.css';
import ProductList from './components/ProductList';
import TotalValue from './components/TotalValue';

function App() {
  return (
    <div className="App">
      <h1>Cardápio Café XYZ</h1>
      <ProductList />
      <TotalValue />
    </div>
  );
}

export default App;
