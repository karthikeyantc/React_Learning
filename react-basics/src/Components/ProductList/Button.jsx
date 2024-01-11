function Button(props)
{
    return (
        // eslint-disable-next-line react/prop-types
        <button onClick={props.eventHandler} className="btn btn-primary">{props.children}</button>
    )
}
export default Button;