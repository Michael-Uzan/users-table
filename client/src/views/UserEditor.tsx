import { Button } from 'components/common/Button';
import { IconClose } from 'components/common/Icons';
import React from 'react';

export const UserEditor = () => {
  return (
    <div className="user-editor-wrapper">
      <div className="screen-user-editor"></div>
      <div className="user-editor">
        <IconClose className="close pointer" />
        <h3 className="tac">{'Edit user'}</h3>
        <div className="flex direction-col align-center">
          <label>
            {'Asdsadsada: '}
            <input type="text" name="" placeholder="" />
          </label>
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
        </div>
        <div className="flex justify-center">
          <Button>{'Delete'}</Button>
          <Button>{'Save'}</Button>
        </div>
      </div>
    </div>
  );
};
