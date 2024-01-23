import { useReducer } from "react";
import "./Demo.css";
type counterState = {
    count: number;
};
type counterAction = {
    type: "INCREMENT" | "DECREMENT" | "RESET";
};
const initialState: counterState = { count: 0 };

function reducer(state: counterState, action: counterAction) {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 };
        case "DECREMENT":
            return { count: state.count - 1 };
        case "RESET":
            return initialState;
        default:
            return state;
    }
}

function Demo() {
    const [state, dispatcher] = useReducer(reducer, initialState);
    function decrementHandler() {
        dispatcher({ type: "DECREMENT" });
    }
    function incrementHandler() {
        dispatcher({ type: "INCREMENT" });
    }
    function resetHandler() {
        dispatcher({ type: "RESET" });
    }
    return (
        <>
            <div className="container">
                <button onClick={decrementHandler}> - </button>
                <span> {state.count} </span>
                <button onClick={incrementHandler}> + </button>
                <button onClick={resetHandler}> Reset </button>
            </div>
        </>
    );
}

export default Demo;
