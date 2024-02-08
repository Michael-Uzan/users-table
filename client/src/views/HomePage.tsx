// import { IUser } from 'interfaces/IUser';
import { usersService } from 'services/users.service';
import { IUser } from 'interfaces/IUser';

import React, { useEffect, useState } from 'react';

import { Header } from 'components/Header';
import { TableTitles } from 'components/TableTitles';
import { TableRow } from 'components/TableRow';
import { AddNewUser } from 'components/AddNewUser';
import { Outlet } from 'react-router-dom';

export const HomePage = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const loadedUsers = await usersService.query();
        setUsers(loadedUsers);
      } catch (e) {
        console.warn(e);
      }
    };

    loadUsers();
  }, []);

  return (
    <div className="home-page">
      <Outlet />
      <Header />
      <TableTitles />
      <AddNewUser />
      {users.map((user) => (
        <TableRow key={user.id} user={user} />
      ))}
    </div>
  );
};
