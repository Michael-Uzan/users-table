/* eslint-disable @typescript-eslint/no-explicit-any */
import { IconClose, IconSearch } from './common/Icons';
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
  onClearResults: () => any;
  // eslint-disable-next-line no-unused-vars,
  onFilterUsers: (criteria?: null | string) => any;
}

export const Header = ({
  criteria,
  usersName,
  setCriteria,
  onAddNewUser,
  onFilterUsers,
  onClearResults,
}: IPropsType) => {
  const [suggestions, setSuggestions] = useState(usersName);
  const [searchTerm, setSearchTerm] = useState('');

  const search = ({ query }: { query: string }) => {
    const regex = new RegExp(query);
    setSuggestions([...usersName].filter((name) => regex.test(name)));
  };

  const searchHandler = () => {
    onFilterUsers();
    setSearchTerm(criteria);
  };

  const clearResults = () => {
    setCriteria('');
    setSearchTerm('');
    onClearResults();
  };

  return (
    <div className="header flex space-between align-center">
      <h1 className="title">{'Users Table'}</h1>
      <div className="flex">
        <div className="search-bar flex align-center">
          {searchTerm ? (
            <div className="results flex align-center">
              <div>{`Showing results for "${searchTerm}"`}</div>
              <IconClose
                className="icon-close pointer"
                fill="#fa9f3d"
                onClick={clearResults}
              />
            </div>
          ) : null}
          <AutoComplete
            placeholder="Search by full name"
            inputStyle={{
              padding: '8px 15px',
              borderRadius: '1rem',
              fontSize: '14px',
              width: '200px',
            }}
            panelStyle={{
              backgroundColor: 'white',
            }}
            value={criteria}
            suggestions={suggestions}
            completeMethod={search}
            onChange={(ev) => setCriteria(ev.target.value)}
          />
          <Button
            className="button-header flex align-center"
            onClick={searchHandler}
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
