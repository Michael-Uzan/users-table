import classNames from 'classnames';
import { IUser } from 'interfaces/IUser';

import React from 'react';
import { Link } from 'react-router-dom';

interface IPropsType {
  user: IUser;
}

export const TableRow = ({ user }: IPropsType) => {
  const {
    id,
    fullName,
    country,
    city,
    email,
    phoneNumber,
    jobTitle,
    yearsOfExperince,
  } = user;
  return (
    <Link to={id.toString()}>
      <div className="table-row pointer">
        <div className={classNames(yearsOfExperince <= 1 ? 'bold' : null)}>
          {fullName}
        </div>
        <div>{country}</div>
        <div>{city}</div>
        <div>{email}</div>
        <div>{phoneNumber}</div>
        <div>{jobTitle}</div>
        <div>{yearsOfExperince}</div>
      </div>
    </Link>
  );
};
