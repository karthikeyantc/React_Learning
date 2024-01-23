import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";

import "./Login.css";
function Login() {
    return (
        <>
            <div className="login-container">
                <header className="login-header">
                    {/* <img
                        // src={brandIcon}
                        alt="Brand Icon"
                        className="brand-icon"
                    /> */}
                    <h1 className="brand-name">Login Form</h1>{" "}
                    {/* replace 'Brand Name' with your brand name */}
                </header>
                <div className="login">
                    <div className="login-image-section">
                        <img
                            src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
                            alt="Brand"
                            className="brand-image"
                        />
                    </div>
                    <div className="login-form-section">
                        <Card title="Login">
                            <form className="login-form">
                                <InputText placeholder="Username or Email" />
                                <InputText
                                    placeholder="Password"
                                    type="password"
                                />
                                <Button label="Submit" />
                                <div className="separator">--or--</div>{" "}
                                {/* Add this line */}
                                <Button
                                    label="Login with Facebook"
                                    icon="pi pi-facebook"
                                    className="facebook-button"
                                />
                            </form>
                            <p>
                                Don't have an account?{" "}
                                <a href="/signup">Create a new one.</a>
                            </p>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
