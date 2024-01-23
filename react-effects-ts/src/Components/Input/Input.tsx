import classes from "./Input.module.css";
type InputProps = {
    children?: React.ReactNode;
    isValid: boolean | undefined;
    type: HTMLInputElement["type"];
    id: string;
    value: string;
    onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlurHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input(props: InputProps) {
    return (
        <>
            <div
                className={`${classes.control} ${
                    props.isValid === false ? classes.invalid : ""
                }`}
            >
                <label htmlFor="email">{props.children}</label>
                <input
                    // ref={inputRef}
                    type={props.type}
                    id={props.id}
                    value={props.value}
                    onChange={props.onChangeHandler}
                    onBlur={props.onBlurHandler}
                />
            </div>
        </>
    );
}

export default Input;
