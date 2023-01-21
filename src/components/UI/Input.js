import classes from './Input.module.css';
const Input = props => {
    return (
        <input 
        type={props.type}
        id={props.id}
        className={classes.input}
        />
    );
};
export default Input;