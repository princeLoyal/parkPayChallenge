import classes from './Input.module.css';
const Input = props => {
    const styles = props.className;
    return (
        <input 
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        className={`${classes.input} ${styles}`}
        />
    );
};
export default Input;