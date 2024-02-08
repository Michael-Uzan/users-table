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
        placeholder="Enter full name"
        value={fullName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="country"
        placeholder="Enter country"
        value={country}
        onChange={handleChange}
      />
      <input
        type="text"
        name="city"
        placeholder="Enter city"
        value={city}
        onChange={handleChange}
      />
      <input
        type="text"
        name="email"
        placeholder="Enter email"
        value={email}
        onChange={handleChange}
      />
      <input
        type="number"
        name="phoneNumber"
        placeholder="Enter phone number"
        value={phoneNumber || ''}
        onChange={handleChange}
      />
      <input
        type="text"
        name="jobTitle"
        placeholder="Enter Job Title"
        value={jobTitle}
        onChange={handleChange}
      />
      <input
        type="number"
        name="yearsOfExperince"
        placeholder="Enter Years"
        value={yearsOfExperince || ''}
        onChange={handleChange}
      />
    </div>
  );
};
