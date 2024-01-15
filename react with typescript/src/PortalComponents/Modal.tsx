import ReactDOM from 'react-dom'
import './Modal.css'

type ModalProps = {
    showModal: boolean
    hideModal: () => void

}

function Modal(props: ModalProps) {
    return ReactDOM.createPortal(
        <>
            <div className={`alert ${props.showModal ? '' : 'hidden'}` }>
                <h2>This is an alert!</h2>
                <p>
                    This is a very simple example of how a custom alert window can be created and displayed using React Portals.
                </p>
                <button className="modal-btn" onClick={props.hideModal}>Ok</button>
            </div>
            <div className={`overlay ${props.showModal ? '' : 'hidden'}`}></div>
        </>,
        document.getElementById("root-portal") as HTMLElement
    )
}

export default Modal