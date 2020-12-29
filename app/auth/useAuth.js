import { useContext } from 'react';
import jwtDecode from 'jwt-decode';

import authStorage from './storage';
import AuthContext from './context';

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logout = () => {
    setUser(null);
    authStorage.removeToken();
  };

  const login = authToken => {
    const user = jwtDecode(authToken);
    setUser(user);
    authStorage.storeToken(authToken);
  };

  return { user, setUser, logout, login };
};
