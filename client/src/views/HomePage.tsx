// import { IUser } from 'interfaces/IUser';
import { usersService } from 'services/users.service';

import React, { useEffect } from 'react';

export const HomePage = () => {
  useEffect(() => {
    const loadUsers = async () => {
      try {
        // const loadedUsers = await usersService.save({
        //   id: 987654326,
        //   fullName: 'asdsa',
        //   country: 'asdasdsad',
        //   city: 'asdasdas',
        //   email: 'david@gmail.com',
        //   phoneNumber: 1234567890,
        //   jobTitle: 'HR',
        //   yearsOfExperince: 4,
        // } as IUser);
        // const loadedUsers = await usersService.getUserById(123456789);
        // const loadedUsers = await usersService.remove(123456789);
        const loadedUsers = await usersService.remove(987654326);
        console.log(loadedUsers);
      } catch (e) {
        console.log(e);
      }
    };

    loadUsers();
  }, []);

  return <div></div>;
};
