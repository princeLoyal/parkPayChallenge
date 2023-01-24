import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import backArrow from '../../assests/left.png';

import classes from './Modal.module.css';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={() => props.onClose(false)}/>;
};

const ModalOverlay = (props) => {
  return (
    <div className={`${classes.modal} ${props.styles}`}>
      <div className={`${classes.content}`}>
          <div className={classes['div-1']}>
           { props.header && <span onClick={() => props.onClose(false)}><img src={backArrow} alt='Back'/></span>}
            <span>{props.header}</span>
         </div>
         <div className={classes['div-2']}>
            {props.children}
         </div>
      </div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  const styles = props.className;
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay header={props.header} styles={styles} onClose={props.onClose}>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};
export default Modal;