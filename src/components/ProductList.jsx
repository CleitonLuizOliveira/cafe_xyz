import Product from './Product';

function ProductList(props) {

    return (
        <div className="ProductList">
            {props.coffeeList.items.map((coffee) => (
                <Product image={coffee.image} name={coffee.name} price={coffee.price} key={coffee.name} addToOrder={props.addToOrder} />
            ))}
        </div>
    );
}

export default ProductList;