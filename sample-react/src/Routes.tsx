import {
    BrowserRouter as Router,
    Route,
    Routes,
    useNavigate,
} from "react-router-dom";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import isAuthenticated from "./auth.tsx";

function PrivateRoute(path: string, element: JSX.Element) {
    const navigate = useNavigate();
    return isAuthenticated() ? (
        <Route path={path} element={element} />
    ) : (
        navigate("/login")
    );
}

const AppRoutes = () => (
    <Router>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            {/* <PrivateRoute path="/dashboard" element={<DashboardPage />} /> */}
        </Routes>
    </Router>
);
export default AppRoutes;
