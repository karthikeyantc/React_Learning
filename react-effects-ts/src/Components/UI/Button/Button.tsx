import classes from './Button.module.css'
type ButtonProps = {
    children: React.ReactNode,
    className: string,
    type: HTMLButtonElement['type'],
    onLogout?: () => void,
    disabled?: boolean
}
function Button(props : ButtonProps) {
    return (
        <>
            <button 
            type={props.type || 'button'}
            onClick={props.onLogout}
            disabled={props.disabled}
            className={`${classes.button} ${props.className}`}>
                {props.children}
            </button>
        </>
    )
}

export default Button