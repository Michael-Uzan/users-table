import { Button } from 'components/common/Button';
import { IconClose } from 'components/common/Icons';
import { useForm } from 'hooks/useForm';
import { usersService } from 'services/users.service';

import React, { useEffect } from 'react';
import { useNavigate, useOutletContext, useParams } from 'react-router-dom';
import { utilsService } from 'utils/utils';

export const UserEditor = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [updatedUser, handleChange, setUpdatedUser] = useForm(
    utilsService.resetFields(),
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [updateUser, deleteUser]: any = useOutletContext();

  useEffect(() => {
    const loadUser = async () => {
      if (!userId) {
        return;
      }

      try {
        const loadedUser = await usersService.getUserById(+userId);
        setUpdatedUser(loadedUser);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.warn(e);
      }
    };

    loadUser();
  }, [userId]);
  const {
    id,
    fullName,
    country,
    city,
    email,
    phoneNumber,
    jobTitle,
    yearsOfExperince,
  } = updatedUser;

  return (
    <div className="user-editor-wrapper">
      <div className="screen-user-editor" onClick={() => navigate(-1)}></div>
      <div className="user-editor">
        <IconClose className="close pointer" onClick={() => navigate(-1)} />
        <h3 className="tac">{'Edit user'}</h3>
        <div className="flex direction-col align-center">
          <input
            type="text"
            name="fullName"
            value={fullName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="country"
            value={country}
            onChange={handleChange}
          />
          <input type="text" name="city" value={city} onChange={handleChange} />
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <input
            type="number"
            name="phoneNumber"
            value={phoneNumber || ''}
            onChange={handleChange}
          />
          <input
            type="text"
            name="jobTitle"
            value={jobTitle}
            onChange={handleChange}
          />
          <input
            type="number"
            name="yearsOfExperince"
            value={yearsOfExperince || ''}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-center">
          <Button onClick={() => deleteUser(id)}>{'Delete'}</Button>
          <Button onClick={() => updateUser(updatedUser)}>{'Save'}</Button>
        </div>
      </div>
    </div>
  );
};
