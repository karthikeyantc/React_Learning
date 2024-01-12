
import PropTypes from 'prop-types';
function Button(props)
{
    return (
        
        <button onClick={props.eventHandler} className="btn btn-primary" disabled={props.disable}>{props.children}</button>
    )
}
export default Button;

//Add prop-types to the Button component
Button.propTypes = {
    eventHandler: PropTypes.func.isRequired,
    disable: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired
}