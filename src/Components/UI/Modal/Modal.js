import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = ({onClose}) => {
  return <div className={classes.backdrop} onClick={onClose}/>;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = ({ children, onCloseBackdrop}) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={onCloseBackdrop}/>, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};
export default Modal;
