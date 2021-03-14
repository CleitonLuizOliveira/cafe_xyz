import If from './If';

function TotalValue(props) {

    const items = props.order.items;
    const total = props.order.total;
    const observation = props.order.observation;

    return (
        <div className="TotalValue">
            <If test={total <= 0}>
                <p>Faça seu pedido no cardápio acima</p>
            </If>          
            <div className="orders">
                {items.map(item => (
                    <div className="order_item" key={item.name}>
                        <legend>{item.name} x{item.amount}</legend>
                        <button onClick={() => props.addToOrder(item)}>+</button>
                        <button onClick={() => props.removeFromOrder(item.name)}>-</button>
                    </div>
                ))}
            </div>  
            <If test={total > 0}>
                <textarea cols="40" rows="5" placeholder="Observação" value={observation} onChange={event => props.setOrderObservation(event.target.value)}></textarea>
            </If>    
            <div className="close_order">
                <h1>R$ {total?.toFixed(2).toString().replace('.',',')}</h1>   
                <button disabled={total === 0} onClick={props.closeOrder}>Fechar Pedido</button>
            </div>            
        </div>
    );
}

export default TotalValue;