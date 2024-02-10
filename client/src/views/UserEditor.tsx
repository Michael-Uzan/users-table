/* eslint-disable no-unused-vars */
import { Button } from 'components/common/Button';
import { IconClose } from 'components/common/Icons';
import { useForm } from 'hooks/useForm';
import { usersService } from 'services/users.service';
import { utilsService } from 'utils/utils';

import React, { useEffect } from 'react';
import { useNavigate, useOutletContext, useParams } from 'react-router-dom';
import { IUser } from 'interfaces/IUser';

export const UserEditor = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [updatedUser, handleChange, setUpdatedUser] = useForm(
    utilsService.resetFields(),
  );

  const [updateUser, deleteUser]: [
    (newUser: IUser) => void,
    (userId: number) => void,
  ] = useOutletContext();

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
    yearsOfExperience,
  } = updatedUser;

  return (
    <div className="user-editor-wrapper">
      <div className="screen-user-editor" onClick={() => navigate(-1)}></div>
      <div className="user-editor">
        <IconClose className="close pointer" onClick={() => navigate(-1)} />
        <h3 className="tac">{'Edit user'}</h3>
        <div className="inputs flex direction-col align-center">
          <label>
            <div className="desc">{'Full Name: '}</div>
            <input
              type="text"
              name="fullName"
              value={fullName}
              onChange={handleChange}
            />
          </label>
          <label>
            <div className="desc">{'Country: '}</div>
            <input
              type="text"
              name="country"
              value={country}
              onChange={handleChange}
            />
          </label>
          <label>
            <div className="desc">{'City: '}</div>
            <input
              type="text"
              name="city"
              value={city}
              onChange={handleChange}
            />
          </label>
          <label>
            <div className="desc">{'Email: '}</div>
            <input
              type="text"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </label>
          <label>
            <div className="desc">{'Phone Number: '}</div>
            <input
              type="text"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChange}
            />
          </label>
          <label>
            <div className="desc">{'Job Title: '}</div>
            <input
              type="text"
              name="jobTitle"
              value={jobTitle}
              onChange={handleChange}
            />
          </label>
          <label>
            <div className="desc">{'Years of Experinces: '}</div>
            <input
              type="number"
              name="yearsOfExperience"
              value={yearsOfExperience < 0 ? '' : yearsOfExperience}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="controls flex justify-center">
          <Button className="control" onClick={() => deleteUser(id)}>
            {'Delete'}
          </Button>
          <Button className="control" onClick={() => updateUser(updatedUser)}>
            {'Save'}
          </Button>
        </div>
      </div>
    </div>
  );
};
