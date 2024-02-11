import { UserEditorControls } from './UserEditorControls';
import { IUser } from 'interfaces/IUser';

import React from 'react';

interface IPropsType {
  updatedUser: IUser;
  onChange: () => void;
}

export const EditUser = ({ updatedUser, onChange }: IPropsType) => {
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
    <div>
      <div className="inputs flex direction-col align-center">
        <label>
          <div className="desc">{'Full Name '}</div>
          <input
            placeholder="Enter Full Name"
            type="text"
            name="fullName"
            value={fullName}
            onChange={onChange}
          />
        </label>
        <label>
          <div className="desc">{'Country '}</div>
          <input
            placeholder="Enter Country"
            type="text"
            name="country"
            value={country}
            onChange={onChange}
          />
        </label>
        <label>
          <div className="desc">{'City '}</div>
          <input
            placeholder="Enter City"
            type="text"
            name="city"
            value={city}
            onChange={onChange}
          />
        </label>
        <label>
          <div className="desc">{'Email '}</div>
          <input
            placeholder="Enter Email"
            type="text"
            name="email"
            value={email}
            onChange={onChange}
          />
        </label>
        <label>
          <div className="desc">{'Phone Number '}</div>
          <input
            placeholder="Enter Phone Number"
            type="text"
            name="phoneNumber"
            value={phoneNumber}
            onChange={onChange}
          />
        </label>
        <label>
          <div className="desc">{'Job Title '}</div>
          <input
            placeholder="Enter Job Title"
            type="text"
            name="jobTitle"
            value={jobTitle}
            onChange={onChange}
          />
        </label>
        <label>
          <div className="desc">{'Years of Experinces '}</div>
          <input
            placeholder="Enter Years of Experince"
            type="number"
            name="yearsOfExperience"
            value={yearsOfExperience < 0 ? '' : yearsOfExperience}
            onChange={onChange}
          />
        </label>
      </div>
      <UserEditorControls updatedUser={updatedUser} />
    </div>
  );
};
