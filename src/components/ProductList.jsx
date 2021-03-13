import Product from './Product';

function ProductList() {
    return (
        <div className="ProductList">
            <Product 
                image="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/flat-white-3402c4f.jpg"
                name="Cafézinho"
                price={10.998}
            />
            <Product 
                image="https://www.caffesociety.co.uk/assets/recipe-images/cappuccino-small.jpg"
                name="Cappuccino"
                price={16.90}
            />
            <Product 
                image="https://www.meals.com/imagesrecipes/142890lrg.jpg"
                name="Mochaccino"
                price={22.93}
            />
        </div>
    );
}

export default ProductList;