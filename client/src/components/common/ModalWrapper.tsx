import { IconClose } from './Icons';

import classNames from 'classnames';
import React, { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface IPropsType {
  children: ReactNode;
  title: string;
  className?: string;
}

export const ModalWrapper = ({ children, title, className }: IPropsType) => {
  const navigate = useNavigate();

  return (
    <div className={classNames('modal-wrapper', className)}>
      <div className="screen-modal" onClick={() => navigate(-1)}></div>
      <div className="modal">
        <IconClose className="close pointer" onClick={() => navigate(-1)} />
        <h3 className="title tac">{title}</h3>
        {children}
      </div>
    </div>
  );
};
