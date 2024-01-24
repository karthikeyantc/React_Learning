import "./App.css";
import "primereact/resources/themes/lara-light-amber/theme.css";
import "primeicons/primeicons.css";
import { PrimeReactProvider } from "primereact/api";
import AppRoutes from "./Routes";

// const AuthRouter = createBrowserRouter([
//     {
//         path: "/login",
//         element: <Login />,
//     },
//     {
//         path: "",
//         element: <Login />,
//     },
//     {
//         path: "/signup",
//         element: <Signup />,
//     },
// ]);
function App() {
    const value = {
        ripple: true,
    };
    return (
        <>
            <PrimeReactProvider value={value}>
                <AppRoutes />
            </PrimeReactProvider>
        </>
    );
}

export default App;
