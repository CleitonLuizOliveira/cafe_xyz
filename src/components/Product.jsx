
function Product(props) {
    return (
        <div className="Product">
            <img src={props.image} alt={props.name}/>
            <h3>{props.name}</h3>
            <h4>R$ {props.price?.toFixed(2).toString().replace('.',',')}</h4>
            <button onClick={() => props.addToOrder({name: props.name, amount: 1, price: props.price})}>adicionar</button>
        </div>
    );
}

export default Product;