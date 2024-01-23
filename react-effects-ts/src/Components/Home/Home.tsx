import Card from "../UI/Card/Card";
import classes from "./Home.module.css";
type HomeProps = {
    onLogout: () => void;
};
const Home = (props: HomeProps) => {
    return (
        <Card className={classes.home}>
            <h3>Hello User. Welcome back!</h3>
        </Card>
    );
};

export default Home;
