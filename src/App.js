import { useState, useEffect } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import TopButtons from './components/TopButtons';
import TotalValue from './components/TotalValue';

function App() {

    const [order, setOrder] = useState({items: [], total: 0});

    useEffect(() => {
        let tempTotal = 0;
        order.items.forEach(item => {
            tempTotal += item.price;
        });
        setOrder({items: order.items, total: tempTotal});
    }, [order.items]);

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
