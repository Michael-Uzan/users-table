import { Header } from 'components/Header';
import { TableTitles } from 'components/TableTitles';
import { TableRow } from 'components/TableRow';
import { AddNewUser } from 'components/AddNewUser';
import { IUser } from 'interfaces/IUser';
import { usersService } from 'services/users.service';
import { utilsService } from 'utils/utils';

import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

export const HomePage = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const loadedUsers = await usersService.query();
        setUsers(loadedUsers);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.warn(e);
      }
    };

    loadUsers();
  }, []);

  const sortUsers = (sortBy: keyof IUser, order: number) => {
    const sortedUsers: IUser[] = utilsService.sortBy([...users], sortBy, order);
    setUsers(sortedUsers);
  };

  return (
    <div className="home-page">
      <Outlet />
      <Header />
      <TableTitles onSortUsers={sortUsers} />
      <AddNewUser />
      {users.map((user) => (
        <TableRow key={user.id} user={user} />
      ))}
    </div>
  );
};
