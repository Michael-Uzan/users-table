/* eslint-disable no-unused-vars */
import { Button } from './common/Button';
import { IUser } from 'interfaces/IUser';

import React from 'react';
import { useOutletContext } from 'react-router-dom';

interface IPropsType {
  updatedUser: IUser;
}

export const UserEditorControls = ({ updatedUser }: IPropsType) => {
  const [updateUser, deleteUser]: [
    (newUser: IUser) => void,
    (userId: number) => void,
  ] = useOutletContext();

  return (
    <div className="controls flex justify-center">
      <Button className="control" onClick={() => deleteUser(updatedUser.id)}>
        {'Delete'}
      </Button>
      <Button className="control" onClick={() => updateUser(updatedUser)}>
        {'Save'}
      </Button>
    </div>
  );
};
