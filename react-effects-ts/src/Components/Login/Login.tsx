import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import { useState, useEffect, useReducer } from "react";
import Input from "../Input/Input";
type inputType = {
    value: string;
    isValid: boolean | undefined;
};

type LoginProps = {
    onLogin: (email: string, password: string) => void;
};

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
function Login(props: LoginProps) {
    // const [enteredEmail, setEnteredEmail] = useState("");
    // const [emailIsValid, setEmailIsValid] = useState(false);
    // const [enteredPassword, setEnteredPassword] = useState("");
    // const [passwordIsValid, setPasswordIsValid] = useState(false);
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
        props.onLogin(emailState.value, passwordState.value);
    }

    return (
        <>
            <Card className={classes.login}>
                <form onSubmit={submitHandler}>
                    <Input
                        // ref={emailRef}
                        type="email"
                        id="email"
                        value={emailState.value}
                        isValid={emailState.isValid}
                        onChangeHandler={emailChangeHandler}
                        onBlurHandler={validateEmailHandler}
                    >
                        {" "}
                        E-mail
                    </Input>
                    <Input
                        // ref={pswdRef}
                        type="password"
                        id="pswd"
                        value={passwordState.value}
                        isValid={passwordState.isValid}
                        onChangeHandler={passwordChangeHandler}
                        onBlurHandler={validatePasswordHandler}
                    >
                        {" "}
                        Password
                    </Input>
                    <div className={classes.actions}>
                        <Button
                            type="submit"
                            className={classes.btn}
                            disabled={!formIsValid}
                        >
                            Login
                        </Button>
                    </div>
                </form>
            </Card>
        </>
    );
}

export default Login;
