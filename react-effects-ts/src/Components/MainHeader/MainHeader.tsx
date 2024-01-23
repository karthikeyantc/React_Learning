import classes from "./MainHeader.module.css";
import Navigation from "./Navigation";
type MainHeaderProps = {
    isAuthenticated: boolean;
    onLogout: () => void;
};
function MainHeader(props: MainHeaderProps) {
    function logoutHandler() {
        props.onLogout();
    }
    return (
        <>
            <header className={classes["main-header"]}>
                <h1>A React App</h1>
                {props.isAuthenticated && (
                    <Navigation onLogout={logoutHandler} />
                )}
            </header>
        </>
    );
}

export default MainHeader;
