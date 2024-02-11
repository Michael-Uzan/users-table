/* eslint-disable no-unused-vars */
import { useForm } from 'hooks/useForm';
import { usersService } from 'services/users.service';
import { utilsService } from 'utils/utils';
import { ModalWrapper } from 'components/common/ModalWrapper';
import { NoUserFound } from 'components/NoUserFound';
import { EditUser } from 'components/EditUser';

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const UserEditor = () => {
  const { userId } = useParams();
  const [updatedUser, handleChange, setUpdatedUser] = useForm(
    utilsService.resetFields(),
  );
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const loadUser = async () => {
      if (!userId) {
        setError(true);
        return;
      }

      try {
        const loadedUser = await usersService.getUserById(+userId);
        setUpdatedUser(loadedUser);
        setError(false);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.warn(e);
        setError(true);
      }
    };

    loadUser();
  }, [userId]);

  return (
    <ModalWrapper title="edit user" className="user-editor">
      {error ? (
        <NoUserFound />
      ) : (
        <EditUser updatedUser={updatedUser} onChange={handleChange} />
      )}
    </ModalWrapper>
  );
};
