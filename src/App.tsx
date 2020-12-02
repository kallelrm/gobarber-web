import React from 'react';

// import SignIn from './pages/SignIn';
import SignIn from './pages/SignIn';
import GlobalStyle from './styles/global';

import AuthContext from './context/AuthContext';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <AuthContext.Provider value={{ name: 'Kallel' }}>
      <SignIn />
    </AuthContext.Provider>
  </>
);

export default App;
