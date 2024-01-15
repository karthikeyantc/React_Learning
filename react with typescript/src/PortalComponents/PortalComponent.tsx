import ReactDOM from "react-dom"

function PortalComponent() {
    return ReactDOM.createPortal(
        <>
            <h1>Portal Component</h1>
        </>,
        document.getElementById("root-portal") as HTMLElement
    )
}

export default PortalComponent