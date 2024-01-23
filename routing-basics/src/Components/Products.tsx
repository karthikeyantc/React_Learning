import { Link } from "react-router-dom";

const ProductsList: { id: number; title: string }[] = [
    { id: 1, title: "Product 1" },
    { id: 2, title: "Product 2" },
    { id: 3, title: "Product 3" },
];
function Products() {
    return (
        <>
            <h1>Products Works</h1>
            <ul>
                {ProductsList.map((product: { id: number; title: string }) => (
                    <li style={{ listStyle: "none" }} key={product.id}>
                        <Link to={`/products/${product.id}`}>
                            {product.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Products;
