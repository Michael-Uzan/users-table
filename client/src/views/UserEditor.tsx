/* eslint-disable no-unused-vars */
import { useForm } from 'hooks/useForm';
import { usersService } from 'services/users.service';
import { utilsService } from 'utils/utils';

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ModalWrapper } from 'components/common/ModalWrapper';
import { UserEditorControls } from 'components/UserEditorControls';

export const UserEditor = () => {
  const { userId } = useParams();
  const [updatedUser, handleChange, setUpdatedUser] = useForm(
    utilsService.resetFields(),
  );

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
    fullName,
    country,
    city,
    email,
    phoneNumber,
    jobTitle,
    yearsOfExperience,
  } = updatedUser;

  return (
    <ModalWrapper title="edit user" className="user-editor">
      <div className="inputs flex direction-col align-center">
        <label>
          <div className="desc">{'Full Name '}</div>
          <input
            placeholder="Enter Full Name"
            type="text"
            name="fullName"
            value={fullName}
            onChange={handleChange}
          />
        </label>
        <label>
          <div className="desc">{'Country '}</div>
          <input
            placeholder="Enter Country"
            type="text"
            name="country"
            value={country}
            onChange={handleChange}
          />
        </label>
        <label>
          <div className="desc">{'City '}</div>
          <input
            placeholder="Enter City"
            type="text"
            name="city"
            value={city}
            onChange={handleChange}
          />
        </label>
        <label>
          <div className="desc">{'Email '}</div>
          <input
            placeholder="Enter Email"
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label>
          <div className="desc">{'Phone Number '}</div>
          <input
            placeholder="Enter Phone Number"
            type="text"
            name="phoneNumber"
            value={phoneNumber}
            onChange={handleChange}
          />
        </label>
        <label>
          <div className="desc">{'Job Title '}</div>
          <input
            placeholder="Enter Job Title"
            type="text"
            name="jobTitle"
            value={jobTitle}
            onChange={handleChange}
          />
        </label>
        <label>
          <div className="desc">{'Years of Experinces '}</div>
          <input
            placeholder="Enter Years of Experince"
            type="number"
            name="yearsOfExperience"
            value={yearsOfExperience < 0 ? '' : yearsOfExperience}
            onChange={handleChange}
          />
        </label>
      </div>
      <UserEditorControls updatedUser={updatedUser} />
    </ModalWrapper>
  );
};
