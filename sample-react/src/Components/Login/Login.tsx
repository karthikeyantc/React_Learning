import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
// import { Ripple } from "primereact/ripple";

import { useNavigate } from "react-router-dom";

import loginImage from "../../assets/login-image.png";

import "./Login.css";
import { useState, useReducer, useEffect } from "react";

type inputType = {
    value: string;
    isValid: boolean | undefined;
};

// type LoginProps = {
//     onLogin: (email: string, password: string) => void;
// };

const initialEmailState: inputType = {
    value: "",
    isValid: undefined,
};
const initialPasswordState: inputType = {
    value: "",
    isValid: undefined,
};
type ActionType = { type: "USER_INPUT" | "VALIDATE_INPUT"; val: string };

function emailReducer(state: inputType, action: ActionType) {
    switch (action.type) {
        case "USER_INPUT":
            return { value: action.val, isValid: undefined };
        case "VALIDATE_INPUT":
            return { value: state.value, isValid: state.value.includes("@") };
        default:
            return state;
    }
}
function passwordReducer(state: inputType, action: ActionType) {
    switch (action.type) {
        case "USER_INPUT":
            return { value: action.val, isValid: undefined };
        case "VALIDATE_INPUT":
            return {
                value: state.value,
                isValid: state.value.trim().length > 6,
            };
        default:
            return state;
    }
}
function Login() {
    const navigate = useNavigate();

    const [formIsValid, setFormIsValid] = useState(false);

    const [emailState, emailDispatcher] = useReducer(
        emailReducer,
        initialEmailState
    );
    const [passwordState, passwordDispatcher] = useReducer(
        passwordReducer,
        initialPasswordState
    );

    useEffect(() => {
        const value: number = setTimeout(() => {
            setFormIsValid(
                emailState.isValid === true && passwordState.isValid === true
            );
        }, 600);

        return () => {
            clearTimeout(value);
        };
    }, [emailState.isValid, passwordState.isValid]);

    function emailChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
        // setEnteredEmail(event.target.value);
        // setEmailIsValid(event.target.value.includes('@') && event.target.value.trim().length > 6)
        emailDispatcher({ type: "USER_INPUT", val: event.target.value });
    }
    function validateEmailHandler() {
        // setEmailIsValid(emailState.value.includes("@"));
        emailDispatcher({ type: "VALIDATE_INPUT", val: emailState.value });
    }
    function passwordChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
        // setEnteredPassword(event.target.value);
        // setPasswordIsValid(event.target.value.trim().length > 6)
        passwordDispatcher({ type: "USER_INPUT", val: event.target.value });
    }
    function validatePasswordHandler() {
        // setPasswordIsValid(enteredPassword.trim().length > 6);
        passwordDispatcher({
            type: "VALIDATE_INPUT",
            val: passwordState.value,
        });
    }
    function submitHandler(event: React.FormEvent) {
        event.preventDefault();
        console.log(emailState.value, passwordState.value);
        localStorage.setItem("token", "true");
        navigate("/");
        // props.onLogin(emailState.value, passwordState.value);
    }
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
                            //src="https://th.bing.com/th/id/OIG.VYG0212PLzHSFnkkAsHT?pid=ImgGn"
                            //use the image from assets folder
                            src={loginImage}
                            alt="Brand"
                            className="brand-image"
                        />
                    </div>
                    <div className="login-form-section">
                        <Card title="Login">
                            <form
                                className="login-form"
                                onSubmit={submitHandler}
                            >
                                <InputText
                                    placeholder="Username or Email"
                                    type="email"
                                    onChange={emailChangeHandler}
                                    onBlur={validateEmailHandler}
                                />
                                <InputText
                                    placeholder="Password"
                                    type="password"
                                    onChange={passwordChangeHandler}
                                    onBlur={validatePasswordHandler}
                                />
                                <Button
                                    label="Submit"
                                    type="submit"
                                    disabled={!formIsValid}
                                />
                                <div className="separator">--or--</div>{" "}
                                {/* Add this line */}
                                <Button
                                    label="Login with Facebook"
                                    icon="pi pi-facebook"
                                    className="facebook-button"
                                    type="button"
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
