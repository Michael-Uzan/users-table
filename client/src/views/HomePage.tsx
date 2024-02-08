import { Header } from 'components/Header';
import { TableTitles } from 'components/TableTitles';
import { TableRow } from 'components/TableRow';
import { AddNewUser } from 'components/AddNewUser';
import { IUser } from 'interfaces/IUser';
import { usersService } from 'services/users.service';
import { eventBusService } from 'services/event-bus.service';
import { utilsService } from 'utils/utils';
import { useForm } from 'hooks/useForm';

import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

export const HomePage = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [newUser, handleChange, setNewUser] = useForm(resetFields());

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

  const addNewUser = async () => {
    if (!utilsService.validateUser(newUser)) {
      eventBusService.showErrorMsg('all fields are required');
      return;
    }
    try {
      const savedNewUser = await usersService.save(newUser);
      setUsers([savedNewUser, ...users]);
      setNewUser(resetFields());
      eventBusService.showSuccessMsg('user added');
    } catch {
      eventBusService.showErrorMsg('cannot add user');
    }
  };

  const sortUsers = (sortBy: keyof IUser, order: number) => {
    const sortedUsers: IUser[] = utilsService.sortBy([...users], sortBy, order);
    setUsers(sortedUsers);
  };

  return (
    <div className="home-page">
      <Outlet />
      <Header onAddNewUser={addNewUser} />
      <TableTitles onSortUsers={sortUsers} />
      <AddNewUser newUser={newUser} handleChange={handleChange} />
      {users.map((user) => (
        <TableRow key={user.id} user={user} />
      ))}
    </div>
  );
};

function resetFields() {
  return {
    fullName: '',
    country: '',
    city: '',
    email: '',
    phoneNumber: 0,
    jobTitle: '',
    yearsOfExperince: 0,
  };
}
