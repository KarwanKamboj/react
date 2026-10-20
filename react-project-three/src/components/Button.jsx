const Button = (props) => {
    return(
        <div>
        <h3>Click the button</h3>
        {props.children}
        <button onClick = {props.click}>
        {props.text}
        </button>
        </div>
    )
}
export default Button