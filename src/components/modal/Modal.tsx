import ReactDOM from 'react-dom';
import {ReactNode, useEffect, useState} from 'react';
import './Modal.css';

const Modal = ({children}: { children: ReactNode }) => {
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setContainer(window.document.getElementById('modal-root'));
  }, []);

  if (!container) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">{children}</div>
    </div>,
    container
  );
};

export default Modal;