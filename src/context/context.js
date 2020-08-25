import React, { useState, Children } from 'react';
import PropTypes from 'prop-types';

export const StateContext = React.createContext();

const StateProvider = (props) => {
  const { children } = props;
  
  const [username, setUsername] = useState(null);
  
  return (
    <StateContext.Provider
      value={{
        username,
        setUsername
      }}
  >
      {Children.only(children)}
    </StateContext.Provider>
  );
};

export default StateProvider;

StateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
