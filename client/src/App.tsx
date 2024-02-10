import UserMsg from 'components/UserMsg';
import { AppRoutes } from 'routes/AppRoutes';

import React from 'react';

function App() {
  return (
    <main className="main-container">
      <UserMsg />
      <AppRoutes />;
    </main>
  );
}

export default App;
