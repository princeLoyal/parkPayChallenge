import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import backArrow from '../../picturesAndFiles/left.png';

import classes from './Modal.module.css';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}/>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>
          <div className={classes['div-1']}>
            <span><img src={backArrow}/></span>
            <span>Select Option</span>
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
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;