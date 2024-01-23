import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";

function Signup() {
    return (
        <>
            <div className="login-container">
                <header className="login-header">
                    {/* <img
            // src={brandIcon}
            alt="Brand Icon"
            className="brand-icon"
        /> */}
                    <h1 className="brand-name">Signup Form</h1>{" "}
                    {/* replace 'Brand Name' with your brand name */}
                </header>
                <div className="login">
                    <div className="login-form-section">
                        <Card title="Signup">
                            <form className="login-form">
                                <InputText placeholder="Full Name" />{" "}
                                {/* Add this line */}
                                <InputText placeholder="Email" />
                                <InputText
                                    placeholder="Password"
                                    type="password"
                                />
                                <InputText
                                    placeholder="Confirm Password"
                                    type="password"
                                />{" "}
                                {/* Add this line */}
                                <Button label="Signup" />{" "}
                                {/* Change this line */}
                            </form>
                            <p>
                                Already have an account?{" "}
                                <a href="/login">Login here.</a>{" "}
                                {/* Change this line */}
                            </p>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;
