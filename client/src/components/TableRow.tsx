import { IUser } from 'interfaces/IUser';

import React from 'react';

interface IPropsType {
  user: IUser;
}

export const TableRow = ({ user }: IPropsType) => {
  const {
    fullName,
    country,
    city,
    email,
    phoneNumber,
    jobTitle,
    yearsOfExperince,
  } = user;
  return (
    <div className="table-row pointer">
      <div>{fullName}</div>
      <div>{country}</div>
      <div>{city}</div>
      <div>{email}</div>
      <div>{phoneNumber}</div>
      <div>{jobTitle}</div>
      <div>{yearsOfExperince}</div>
    </div>
  );
};
