import If from './If';

function TotalValue(props) {

    const items = props.order.items;
    const total = props.order.total;

    return (
        <div className="TotalValue">
            <If test={total <= 0}>
                <p>Faça seu pedido no cardápio acima</p>
            </If>          
            <div className="orders">
                {items.map(item => (
                    <div className="order_item">
                        <legend>{item.name} x{item.amount}</legend>
                        <button onClick={() => props.addToOrder(item)}>+</button>
                        <button onClick={() => props.removeFromOrder(item.name)}>-</button>
                    </div>
                ))}
            </div>     
            <div className="close_order">
                <h1>R$ {total?.toFixed(2).toString().replace('.',',')}</h1>   
                <button disabled={total === 0}>Fechar Pedido</button>
            </div>
            
        </div>
    );
}

export default TotalValue;