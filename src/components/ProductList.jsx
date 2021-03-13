import Product from './Product';

function ProductList(props) {

    const coffeeList = [
        {
            image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/flat-white-3402c4f.jpg",
            name: "Cafézinho",
            price: 10.998,
        },
        {
            image: "https://www.caffesociety.co.uk/assets/recipe-images/cappuccino-small.jpg",
            name: "Cappuccino",
            price: 16.90,
        },
        {
            image: "https://www.meals.com/imagesrecipes/142890lrg.jpg",
            name: "Mochaccino",
            price: 22.93,
        },
    ]

    return (
        <div className="ProductList">
            {coffeeList.map((coffee) => (
                <Product image={coffee.image} name={coffee.name} price={coffee.price} key={coffee.name} addToOrder={props.addToOrder} />
            ))}
        </div>
    );
}

export default ProductList;