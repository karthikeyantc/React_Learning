import {
    BrowserRouter as Router,
    Route,
    Routes,
    useNavigate,
    Outlet,
} from "react-router-dom";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import isAuthenticated from "./auth.tsx";
import RootLayout from "./Layout/RootLayout.tsx";
import HomePage from "./Components/HomePage/HomePage.tsx";
import { useEffect } from "react";

function PrivateRoute() {
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated()) {
            navigate("/login");
        }
    }, [navigate]);

    return isAuthenticated() ? <Outlet /> : null;
}

const AppRoutes = () => (
    <Router>
        <Routes>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="" element={<RootLayout />}>
                <Route path="" element={<PrivateRoute />}>
                    <Route index element={<HomePage />} />
                </Route>
            </Route>

            {/* <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} /> */}
            {/* <PrivateRoute path="/home" element={<HomePage />} /> */}
        </Routes>
    </Router>
);
export default AppRoutes;
