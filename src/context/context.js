import React, { useState, Children } from 'react';
import PropTypes from 'prop-types';


export const GS_ENTER_NAME = 'gs_enter_name';
export const GS_WAITING_FOR_OPONENT = 'gs_waiting_for_oponent';
export const GS_GAME_RUNNING = 'gs_game_running';
export const GS_YOU_WON = 'gs_you_won';
export const GS_YOU_LOST = 'gs_you_lost';



export const StateContext = React.createContext();

const StateProvider = (props) => {
  const [username, setUsername] = useState(null);
  const [currentGameState, setCurrentGameState] = useState(GS_ENTER_NAME);
  const { children } = props;

  return (
    <StateContext.Provider
      value={{
        username,
        setUsername,
        currentGameState, 
        setCurrentGameState
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
