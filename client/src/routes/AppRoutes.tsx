import { HomePage } from 'views/HomePage';
import { UserEditor } from 'views/UserEditor';

import { useRoutes } from 'react-router-dom';
import React from 'react';

export const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <HomePage />,
      children: [{ path: '/:userId', element: <UserEditor /> }],
    },
  ]);

  return routes;
};
