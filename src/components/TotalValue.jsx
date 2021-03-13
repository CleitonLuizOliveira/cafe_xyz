
function TotalValue(props) {

    const items = props.order.items;
    const total = props.order.total || 0;

    return (
        <div className="TotalValue">
            <p>Faça seu pedido no cardápio acima</p>
            {items.map(item => (
                <div className="order_item">
                    <legend>{item.name} x{item.amount}</legend>
                    <button onClick={() => props.addToOrder(item)}>+</button>
                    <button onClick={() => props.removeFromOrder(item.name)}>-</button>
                </div>
            ))}
            <h1>R$ {total.toFixed(2).toString().replace('.',',')}</h1>
        </div>
    );
}

export default TotalValue;