import { IUser } from 'interfaces/IUser';

import React, { useState } from 'react';

interface IPropsType {
  title?: string;
  keyId?: string;
  // eslint-disable-next-line no-unused-vars
  onSortUsers: (sortBy: keyof IUser, order: number) => void;
}

export const TableTitles = ({ onSortUsers }: IPropsType) => {
  return (
    <div className="table-titles">
      {TITLES.map(({ title, keyId }) => (
        <Title
          title={title}
          key={keyId}
          keyId={keyId}
          onSortUsers={onSortUsers}
        />
      ))}
    </div>
  );
};

const Title = ({ title, keyId, onSortUsers }: IPropsType) => {
  const [order, setOrder] = useState<number>(1);

  const clickHandler = () => {
    onSortUsers(keyId as keyof IUser, order);
    setOrder(order * -1);
  };

  return (
    <div className="table-title pointer" onClick={clickHandler}>
      {title}
    </div>
  );
};

const TITLES = [
  { title: 'full name', keyId: 'fullName' },
  { title: 'country', keyId: 'country' },
  { title: 'city', keyId: 'city' },
  { title: 'email', keyId: 'email' },
  { title: 'phone number', keyId: 'phoneNumber' },
  { title: 'job title', keyId: 'jobTitle' },
  { title: 'years of experience', keyId: 'yearsOfExperience' },
];
