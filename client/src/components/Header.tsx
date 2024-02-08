/* eslint-disable @typescript-eslint/no-explicit-any */
import { IconSearch } from './common/Icons';
import { Button } from './common/Button';
import Image from './common/Image';
import imgAddUser from 'assets/imgs/add-user.png';

import React, { useState } from 'react';
import { AutoComplete } from 'primereact/autocomplete';

interface IPropsType {
  criteria: string;
  usersName: string[];
  setCriteria: any;
  onAddNewUser: () => any;
  // eslint-disable-next-line no-unused-vars,
  onFilterUsers: (criteria?: null | string) => any;
}

export const Header = ({
  criteria,
  usersName,
  setCriteria,
  onAddNewUser,
  onFilterUsers,
}: IPropsType) => {
  const [suggestions, setSuggestions] = useState(usersName);

  const search = ({ query }: { query: string }) => {
    const regex = new RegExp(query);
    setSuggestions([...usersName].filter((name) => regex.test(name)));
  };

  return (
    <div className="header flex space-between align-center">
      <h1 className="title">{'Users Table'}</h1>
      <div className="flex">
        <div className="search-bar flex align-center">
          <AutoComplete
            className="search-input"
            panelStyle={{ backgroundColor: 'white' }}
            value={criteria}
            suggestions={suggestions}
            completeMethod={search}
            onChange={(ev) => setCriteria(ev.target.value)}
          />
          <Button
            className="button-header flex align-center"
            onClick={onFilterUsers}
          >
            <IconSearch />
            <div className="button-header-title search">{'Search'}</div>
          </Button>
        </div>
        <Button
          className="button-header flex align-center"
          onClick={onAddNewUser}
        >
          <Image className="button-header-img" src={imgAddUser} />
          <div className="button-header-title">{'Add New'}</div>
        </Button>
      </div>
    </div>
  );
};
