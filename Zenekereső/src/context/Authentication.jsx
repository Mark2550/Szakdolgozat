import { createContext, useState } from 'react';
import PropTypes from 'prop-types';     
/* 
 * second import to resolve children prop balidation error in line 9 
 */

const AuthContext = createContext({});

export const Authentication = ({ children }) => {
    const [auth, setAuth] = useState({});

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            { children }
        </AuthContext.Provider>
    )
}

Authentication.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default AuthContext; 