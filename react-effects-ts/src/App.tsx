import { useEffect, useState } from "react";
import "./App.css";
import Login from "./Components/Login/Login";
import MainHeader from "./Components/MainHeader/MainHeader";
import Home from "./Components/Home/Home";
// import Demo from "./Components/ReducerDemo/Demo";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        const isLoggedInValue = localStorage.getItem("isLoggedIn");
        if (isLoggedInValue === "1") {
            setIsLoggedIn(true);
        }
    }, []);
    const loginHandler = (email: string, password: string) => {
        if (email.length > 0 && password.length > 0) {
            localStorage.setItem("isLoggedIn", "1");
            setIsLoggedIn(true);
        }
    };
    const logoutHandler = () => {
        localStorage.removeItem("isLoggedIn");
        setIsLoggedIn(false);
    };

    return (
        <>
            {/* <div className="App">
                <button
                    onClick={() => {
                        setResourceType("HOME");
                    }}
                >
                    HOME
                </button>
                <button
                    onClick={() => {
                        setResourceType("ABOUT");
                    }}
                >
                    ABOUT
                </button>
                <button
                    onClick={() => {
                        setResourceType("CONTACT");
                    }}
                >
                    CONTACT
                </button>
                <h3>{resourceType}</h3>
            </div> */}
            <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
            <main>
                {!isLoggedIn && <Login onLogin={loginHandler} />}
                {isLoggedIn && <Home onLogout={logoutHandler} />}
            </main>
            {/* <Demo /> */}
        </>
    );
}

export default App;
