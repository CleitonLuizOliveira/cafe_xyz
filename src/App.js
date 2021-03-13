import './App.css';
import ProductList from './components/ProductList';
import TopButtons from './components/TopButtons';
import TotalValue from './components/TotalValue';

function App() {

  return (
    <div className="App">
      <h1>Café XYZ</h1>
      <TopButtons />
      <ProductList />
      <TotalValue />
    </div>
  );
}

export default App;
