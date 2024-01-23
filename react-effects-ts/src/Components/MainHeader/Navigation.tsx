import classes from "./Navigation.module.css";

type NavigationProps = {
    onLogout: () => void;
};

function Navigation(props: NavigationProps) {
    return (
        <>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <a href="/">Users</a>
                    </li>

                    <li>
                        <a href="/">Admin</a>
                    </li>

                    <li>
                        <button onClick={props.onLogout}>Logout</button>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navigation;
