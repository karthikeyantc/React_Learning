export default function isAuthenticated() {
    const token = Boolean(localStorage.getItem("token"));
    console.log(token);
    if (token) {
        return true;
    } else {
        return false;
    }
}
