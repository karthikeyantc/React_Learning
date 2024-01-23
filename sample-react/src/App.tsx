import "./App.css";
import "primereact/resources/themes/lara-light-amber/theme.css";
import "primeicons/primeicons.css";

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
    return (
        <>
            <AppRoutes />
        </>
    );
}

export default App;
