import { forwardRef } from 'react';
import classes from './Input.module.css';
const Input = forwardRef(function MyInput(props, ref) {
    const {...all} = props;
    const styles = props.className;
    return (
        <input 
        className={`${classes.input} ${styles}`}
        {...all}
        ref={ref}
        />
    );
});
export default Input;