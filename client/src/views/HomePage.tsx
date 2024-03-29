import { Header } from 'components/Header';
import { TableTitles } from 'components/TableTitles';
import { TableRow } from 'components/TableRow';
import { AddNewUser } from 'components/AddNewUser';
import { NoResults } from 'components/NoResults';
import { IUser } from 'interfaces/IUser';
import { usersService } from 'services/users.service';
import { eventBusService } from 'services/event-bus.service';
import { utilsService } from 'utils/utils';
import { useForm } from 'hooks/useForm';

import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

export const HomePage = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState<IUser[]>([]);
  const [newUser, handleChange, setNewUser] = useForm(
    utilsService.resetFields(),
  );
  const [criteria, setCriteria] = useState<string>('');
  const [toggleAddNewUser, setToggleAddNewUser] = useState<boolean>(false);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async (criteria: null | string = null) => {
    try {
      const loadedUsers = await usersService.query(criteria);
      setUsers(loadedUsers);
    } catch (e) {
      eventBusService.showErrorMsg(`can't load users`);
    }
  };

  const addNewUser = async () => {
    if (!utilsService.validateUser(newUser)) {
      eventBusService.showErrorMsg('all fields are required');
      return;
    }
    try {
      const savedNewUser = await usersService.save(newUser);
      setUsers([savedNewUser, ...users]);
      setNewUser(utilsService.resetFields());
      eventBusService.showSuccessMsg('user added');
    } catch {
      eventBusService.showErrorMsg('cannot add user');
    }
  };

  const updateUser = async (updatedUser: IUser) => {
    if (!utilsService.validateUser(updatedUser)) {
      eventBusService.showErrorMsg('all fields are required');
      return;
    }
    try {
      await usersService.save(updatedUser);
      const loadedUsers = await usersService.query(criteria);
      setUsers(loadedUsers);
      eventBusService.showSuccessMsg('user saved');
    } catch {
      eventBusService.showErrorMsg('cannot save user');
    }
  };

  const deleteUser = async (userId: number) => {
    try {
      await usersService.remove(userId);
      setUsers(users.filter((user) => user.id !== userId));
      eventBusService.showSuccessMsg('user removed');
      navigate(-1);
    } catch {
      eventBusService.showErrorMsg('cannot remove user');
    }
  };

  const sortUsers = (sortBy: keyof IUser, order: number) => {
    const sortedUsers: IUser[] = utilsService.sortBy([...users], sortBy, order);
    setUsers(sortedUsers);
  };

  return (
    <div className="home-page-wrapper">
      <div className="home-page">
        <Outlet context={[updateUser, deleteUser]} />
        <Header
          criteria={criteria}
          usersName={users.map(({ fullName }) => fullName)}
          setCriteria={setCriteria}
          onToggleAddNewUser={() => setToggleAddNewUser(!toggleAddNewUser)}
          onFilterUsers={() => loadUsers(criteria)}
          onClearResults={() => loadUsers()}
        />
        <TableTitles onSortUsers={sortUsers} />
        {toggleAddNewUser ? (
          <AddNewUser
            newUser={newUser}
            handleChange={handleChange}
            onAddNewUser={addNewUser}
          />
        ) : null}
        {users.length > 0 ? (
          users.map((user) => <TableRow key={user.id} user={user} />)
        ) : (
          <NoResults />
        )}
      </div>
    </div>
  );
};
