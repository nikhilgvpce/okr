import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./Modal.css";

const Modal = (props) => {
  const { listItem, closeModal } = props;
  useEffect(() => {
    const close = (e) => {
      if(e.key === "Escape"){
        closeModal()
      }
    }
    window.addEventListener('keydown', close)
  return () => window.removeEventListener('keydown', close)
},[])

  return (
    <div className="modal">
      <a href="#" className="close" onClick={closeModal} >
        Close
      </a>
      <ol  className="modal-ol">
        {Object.keys(listItem).map((item) => {
          return (
            <li className="modal-li">
              {item} : {listItem[item]}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

Modal.propTypes = {
  listItem: PropTypes.object
};

export default Modal;
