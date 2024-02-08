import { UserMsg } from 'components/UserMsg';
import React from 'react';
import { AppRoutes } from 'routes/AppRoutes';

function App() {
  return (
    <main className="main-container">
      <UserMsg />
      <AppRoutes />;
    </main>
  );
}

export default App;
