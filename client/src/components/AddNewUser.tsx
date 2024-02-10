import { IUser } from 'interfaces/IUser';

import React, { FormEvent } from 'react';

interface IPropsType {
  newUser: IUser;
  handleChange: () => void;
  onAddNewUser: () => void;
}

export const AddNewUser = ({
  newUser,
  handleChange,
  onAddNewUser,
}: IPropsType) => {
  const {
    fullName,
    country,
    city,
    email,
    phoneNumber,
    jobTitle,
    yearsOfExperience,
  } = newUser;

  const onFormSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    onAddNewUser();
  };

  return (
    <form className="add-new-user" onSubmit={onFormSubmit}>
      <div className="title-wrapper flex align-center justify-center">
        <h3 className="title">{'Add new user'}</h3>
        <span className="description">{'(Press "Enter" to save)'}</span>
      </div>
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
        type="text"
        name="phoneNumber"
        placeholder="Enter phone number"
        value={phoneNumber}
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
        name="yearsOfExperience"
        placeholder="Enter Years"
        value={yearsOfExperience < 0 ? '' : yearsOfExperience}
        onChange={handleChange}
      />
      <button type="submit" className="hide" />
      {/* An hide button just to evoke onSubmit on enter key */}
    </form>
  );
};
