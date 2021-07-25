import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./Modal.css";

/**
 * renders the child OKR details on Modal
 */

const Modal = (props) => {
  const { listItem, closeModal } = props;

  /**
   * listens for keydown event and closed the Modal if open
   */
  useEffect(() => {
    const close = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [closeModal]);

  return (
    <div className="modal">
      <button className="close" onClick={closeModal}>
        Close
      </button>
      <ol className="modal-ol">
        {Object.keys(listItem).map((item) => {
          return (
            <li key={listItem[item]} className="modal-li">
              {item} : {listItem[item]}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

Modal.propTypes = {
  listItem: PropTypes.object,
};

export default Modal;
