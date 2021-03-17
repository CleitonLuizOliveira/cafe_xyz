import { useState } from 'react';
import Firebase from './Firebase';

function CreateMenuItem(props) {

    const dataBase = Firebase.firestore();

    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState('');

    function submitNewitem(event) {
        event.preventDefault();
        dataBase.collection('coffees').doc(name).set({name, image, price: parseInt(price)});
        props.getCoffeeList();
        props.changeScreen(props.screens.menu);
    }

    return (
        <div className="CreateMenuItem">
            <form className="container" onSubmit={event => submitNewitem(event)}>
                <input type="text" placeholder="Nome" onChange={event => setName(event.target.value)} required/>
                <input type="url" placeholder="Imagem" onChange={event => setImage(event.target.value)} required/>
                <input type="number" step="0.01" placeholder="Preço" onChange={event => setPrice(event.target.value)} required/>
                <button type="submit">Adicionar item ao Cardápio</button>
            </form>            
        </div>
    );
}

export default CreateMenuItem;