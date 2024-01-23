import { Link, useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    function navigateToProducts() {
        navigate("/products");
    }
    return (
        <>
            <h1>Home Works</h1>
            <p>
                Click on the Products link to see the Products page.
                <Link to="/products">Products Link</Link>
            </p>
            <p>
                <button onClick={navigateToProducts}>Products Button</button>
            </p>
        </>
    );
}

export default Home;
