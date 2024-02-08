import { IUser } from 'interfaces/IUser';

import React from 'react';

interface IPropsType {
  newUser: IUser;
  handleChange: () => void;
}

export const AddNewUser = ({ newUser, handleChange }: IPropsType) => {
  const {
    fullName,
    country,
    city,
    email,
    phoneNumber,
    jobTitle,
    yearsOfExperince,
  } = newUser;

  return (
    <div className="add-new-user">
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
      <input type="text" name="email" value={email} onChange={handleChange} />
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
  );
};
