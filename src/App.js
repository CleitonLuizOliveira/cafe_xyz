import { useState, useEffect } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import TopButtons from './components/TopButtons';
import TotalValue from './components/TotalValue';
import Firebase from './components/Firebase';
import CreditCard from './components/CreditCard';
import Confirmation from './components/Confirmation';
import If from './components/If';

function App() {

    const dataBase = Firebase.firestore();

    const [coffeeList, setCoffeeList] = useState({loading: false, items: null});
    const [order, setOrder] = useState({items: [], total: 0});
    const [showCreditCard, setShowCreditCard] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);

    useEffect(() => {
        getCoffeeList();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        let tempTotal = 0;
        order.items.forEach(item => {
            tempTotal += item.price * item.amount;
        });
        setOrder({items: order.items, total: tempTotal});
    }, [order.items]);

    async function getCoffeeList() {
        setCoffeeList({ loading: true});
        const snapshot = await dataBase.collection('coffees').get()
        const tempArray = snapshot.docs.map(doc => doc.data());        
        setCoffeeList({ loading: false, items: tempArray});
    }

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

    function closeOrder() {
        setShowCreditCard(true);
    }

    function sendOrder() {
        const date = new Date();
        setShowCreditCard(false);
        dataBase.collection('orders').doc(`R$ ${order.total.toFixed(2)} - ${date.toString()}`).set(order);
        setShowConfirmation(true);
        setOrder({items: [], total: 0});
    }


    return (
        <div className="App">
            <h1>Café XYZ</h1>
            <TopButtons />
            <If test={coffeeList.items}>
                <ProductList coffeeList={coffeeList} addToOrder={addToOrder} removeFromOrder={removeFromOrder}/>
            </If>         
            <If test={showCreditCard}>
                <CreditCard sendOrder={sendOrder} />
            </If>               
            <TotalValue order={order} addToOrder={addToOrder} removeFromOrder={removeFromOrder} closeOrder={closeOrder}/>
            <If test={showConfirmation}>
                <Confirmation />
            </If>
        </div>
    );
}

export default App;
