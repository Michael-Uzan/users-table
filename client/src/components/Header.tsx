import React from 'react';
import { IconSearch } from './common/Icons';
import { Button } from './common/Button';
import Image from './common/Image';
import imgAddUser from 'assets/imgs/add-user.png';

export const Header = () => {
  return (
    <div className="header flex space-between align-center">
      <h1 className="title">{'Users Table'}</h1>
      <div className="flex">
        <div className="search-bar flex align-center">
          <input
            className="search-input"
            type="text"
            placeholder="Enter full name"
          />
          <Button className="button-header flex align-center">
            <IconSearch />
            <div className="button-header-title search">{'Search'}</div>
          </Button>
        </div>
        <Button className="button-header flex align-center">
          <Image className="button-header-img" src={imgAddUser} />
          <div className="button-header-title">{'Add New'}</div>
        </Button>
      </div>
    </div>
  );
};
