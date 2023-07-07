import React, { type ReactElement } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/Login';
import SignupPage from './pages/Signup';
import { isAuthenticated } from './apiclient';

const PrivateWrapper = ({
  children,
}: {
  children: ReactElement;
}): ReactNode => {
  return isAuthenticated() ? children : <Navigate to="/login" replace />;
};

const App = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateWrapper>
              <Home />
            </PrivateWrapper>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
};

export default App;
