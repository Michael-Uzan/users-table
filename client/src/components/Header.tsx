import { IconClose, IconSearch } from './common/Icons';
import { Button } from './common/Button';
import Image from './common/Image';
import imgAddUser from 'assets/imgs/add-user.png';

import React, { Dispatch, FormEvent, SetStateAction, useState } from 'react';
import { AutoComplete } from 'primereact/autocomplete';

interface IPropsType {
  criteria: string;
  usersName: string[];
  setCriteria: Dispatch<SetStateAction<string>>;
  onToggleAddNewUser: () => void;
  onClearResults: () => void;
  // eslint-disable-next-line no-unused-vars,
  onFilterUsers: (criteria?: null | string) => void;
}

export const Header = ({
  criteria,
  usersName,
  setCriteria,
  onToggleAddNewUser,
  onFilterUsers,
  onClearResults,
}: IPropsType) => {
  const [suggestions, setSuggestions] = useState(usersName);
  const [searchTerm, setSearchTerm] = useState('');

  const search = ({ query }: { query: string }) => {
    const regex = new RegExp(query.toLocaleLowerCase());
    setSuggestions(
      [...usersName].filter((name) => regex.test(name.toLocaleLowerCase())),
    );
  };

  const onSearch = () => {
    onFilterUsers();
    setSearchTerm(criteria);
  };

  const onSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    onSearch();
  };

  const clearResults = () => {
    setCriteria('');
    setSearchTerm('');
    onClearResults();
  };

  return (
    <div className="header flex space-between align-center">
      <h1 className="title">{'Users Table'}</h1>
      <form className="flex" onSubmit={onSubmit}>
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
            onClick={onSearch}
          >
            <IconSearch />
            <div className="button-header-title search">{'Search'}</div>
          </Button>
        </div>
        <Button
          className="button-header flex align-center"
          onClick={onToggleAddNewUser}
        >
          <Image className="button-header-img" src={imgAddUser} />
          <div className="button-header-title">{'Add New'}</div>
        </Button>
      </form>
    </div>
  );
};
