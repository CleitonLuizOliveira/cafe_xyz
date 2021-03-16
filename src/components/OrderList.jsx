function OrderList(props) {
    return (
        <div className="OrderList">
            {props.orderList.map((order) => (
                <div key={order.date.toString()} className="order">
                    <h3>Pedido n°{order.date.seconds}</h3>
                    <h3>R$ {order.total.toFixed(2)}</h3>
                    <div className="order_items">
                        {order.items.map((item) => (
                            <div key={item.name} className="item">
                                <legend>{item.name} x{item.amount} = R$ {(item.price*item.amount).toFixed(2)}</legend>
                            </div>                
                        ))}
                    </div>
                </div>                
            ))}
        </div>
    );
}

export default OrderList;