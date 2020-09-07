import { GS_ENTER_NAME } from '../constants';

/*
 * Action Types
 */
export const appActionTypes = {
  SET_PLAYER_USERNAME: 'APP/SET_PLAYER_USERNAME',
  SET_OPPONENT_USERNAME: 'APP/SET_OPPONENT_USERNAME',
  SET_SYMBOLS: 'APP/SET_SYMBOLS',
  SET_CURRENT_GAME_STATE: 'APP/SET_CURRENT_GAME_STATE',
  SET_PLAYER_GRID: 'APP/SET_PLAYER_GRID',
  SET_OPPONENT_GRID: 'APP/SET_OPPONENT_GRID',
};

/**
 * Reducer
 */
const initialState = {
  playerUsername: null,
  playerSymbol: null,
  opponentUsername: null,
  opponentSymbol: null,
  playerGrid: [],
  opponentGrid: [],
  currentGameState: GS_ENTER_NAME,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case appActionTypes.SET_PLAYER_USERNAME:
      const { playerUsername } = action.payload;
      return {
        ...state,
        playerUsername,
      };

    case appActionTypes.SET_OPPONENT_USERNAME:
      const { opponentUsername } = action.payload;
      return {
        ...state,
        opponentUsername,
      };

    case appActionTypes.SET_SYMBOLS:
      const { playerSymbol, opponentSymbol } = action.payload;
      return {
        ...state,
        playerSymbol,
        opponentSymbol,
      };

    case appActionTypes.SET_CURRENT_GAME_STATE:
      const { currentGameState } = action.payload;
      return {
        ...state,
        currentGameState,
      };

    case appActionTypes.SET_PLAYER_GRID:
      const { playerCell } = action.payload;
      return {
        ...state,
        playerGrid: [...state.playerGrid, playerCell],
      };

    case appActionTypes.SET_OPPONENT_GRID:
      const { opponentCell } = action.payload;
      return {
        ...state,
        opponentGrid: [...state.opponentGrid, opponentCell],
      };

    default:
      return state;
  }
};

export const appActions = {
  setPlayerUsername: (data) => ({
    type: appActionTypes.SET_PLAYER_USERNAME,
    payload: data,
  }),
  setOpponentUsername: (data) => ({
    type: appActionTypes.SET_OPPONENT_USERNAME,
    payload: data,
  }),
  setSymbols: (data) => ({
    type: appActionTypes.SET_SYMBOLS,
    payload: data,
  }),
  setCurrentGameState: (data) => ({
    type: appActionTypes.SET_CURRENT_GAME_STATE,
    payload: data,
  }),
  setPlayerGrid: (data) => ({
    type: appActionTypes.SET_PLAYER_GRID,
    payload: data,
  }),
  setOpponentGrid: (data) => ({
    type: appActionTypes.SET_OPPONENT_GRID,
    payload: data,
  }),
};
