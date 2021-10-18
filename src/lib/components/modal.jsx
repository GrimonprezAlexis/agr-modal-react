import React from 'react';
import './modal.scss';

export const Modal = ({ handleClose, show, title, body }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className="modal" className={showHideClassName}>
      <section className="modal__main">
        <div className="modal__header">
          <h3>{title}</h3>
          <button type="button" className="close" onClick={handleClose}>
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal__body">
          <p>{body}</p>
        </div>
        <div className="modal__footer">
          <button type="button" onClick={handleClose}>Close</button>
        </div>
      </section>
      

    </div>
  );
};