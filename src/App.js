import { useState, useEffect } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import TopButtons from './components/TopButtons';
import TotalValue from './components/TotalValue';

function App() {

    const [order, setOrder] = useState({items: [{name: "cafézinho", amount: 1, price: 3.99}], total: 0});

    useEffect(() => {
        let tempTotal = 0;
        order.items.forEach(item => {
            tempTotal += item.price * item.amount;
        });
        setOrder({items: order.items, total: tempTotal});
    }, [order.items]);

    function addToOrder(item) {    
        if(order.items.some(orderItem => orderItem.name === item.name)) {
            const tempArray = order.items.map(orderItem =>
                orderItem.name === item.name ? {...orderItem, amount: orderItem.amount + 1} : orderItem
            );
            setOrder({items: tempArray});
        } else {
            setOrder({items: [...order.items, item]});
        }    
    }

    function removeFromOrder(itemName) {    
        const tempArray = order.items.map(item =>
            item.name === itemName ? {...item, amount: item.amount - 1} : item
        );
        const filteredArray = tempArray.filter(item => item.amount > 0);
        setOrder({items: filteredArray});
    }


    return (
        <div className="App">
            <h1>Café XYZ</h1>
            <TopButtons />
            <ProductList addToOrder={addToOrder} removeFromOrder={removeFromOrder}/>
            <TotalValue order={order} addToOrder={addToOrder} removeFromOrder={removeFromOrder}/>
        </div>
    );
}

export default App;
