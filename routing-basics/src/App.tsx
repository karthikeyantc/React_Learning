import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Products from "./Components/Products";
import RootLayout from "./Components/RootLayout";
import Error from "./Components/Error";
import ProductDetails from "./Components/ProductDetails";

const BrowserRouter = createBrowserRouter([
    {
        path: "",
        element: <RootLayout />,
        errorElement: <Error />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/products", element: <Products /> },
            { path: "/products/:productId", element: <ProductDetails /> },
        ],
    },
]);
function App() {
    return (
        <>
            <RouterProvider router={BrowserRouter} />
        </>
    );
}

export default App;
