import React, { FC, Fragment } from 'react';
import ReactDom from 'react-dom';

import styles from './Modal.module.sass';

interface Props {
  lang: string;
  onHideModal: () => void;
  children?: JSX.Element;
}

const Backdrop: FC<Props> = ({ onHideModal }): JSX.Element => {
  return <div className={styles.backdrop} onClick={onHideModal}></div>;
};

const ModalOverlay: FC<Props> = ({ children }): JSX.Element => {
  return <div className={styles.modal}>{children}</div>;
};

const Modal: FC<Props> = ({ lang, children, onHideModal }): JSX.Element => {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <Backdrop lang={lang} onHideModal={onHideModal} />,
        document.getElementById('backdrop-root') as HTMLElement
      )}
      {ReactDom.createPortal(
        <ModalOverlay onHideModal={onHideModal} lang={lang}>
          {children}
        </ModalOverlay>,
        document.getElementById('overlay-root') as HTMLElement
      )}
    </Fragment>
  );
};

export default Modal;
