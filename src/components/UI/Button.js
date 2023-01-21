import classes from './Button.module.css';
const Button = props => {
    const styles = props.className
    return (
        <button
        onClick={props.onClick}
        type={props.button}
        className={`${classes.button} ${styles}`}
        >
            {props.children}
        </button>
    );
};
export default Button;