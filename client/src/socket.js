import io from 'socket.io-client';

import store, { appActionTypes } from './redux';
import { GS_WAITING_FOR_OPPONENT_MOVE, GS_MY_TURN, GS_YOU_LOST, GS_YOU_WON } from './constants';

console.info('Creating socket for backend connection');
export const ioSocket = io.connect(process.env.REACT_APP_SERVER_URL);

ioSocket.on('game.begin', (data) => {
  console.log('GAME.BEGIN EVENT', data);
  data.symbol === 'X'
    ? store.dispatch({
        type: appActionTypes.SET_CURRENT_GAME_STATE,
        payload: { currentGameState: GS_WAITING_FOR_OPPONENT_MOVE },
      })
    : store.dispatch({
        type: appActionTypes.SET_CURRENT_GAME_STATE,
        payload: { currentGameState: GS_MY_TURN },
      });

  store.dispatch({
    type: appActionTypes.SET_OPPONENT_USERNAME,
    payload: { opponentUsername: data.anotherPlayerName },
  });
  store.dispatch({
    type: appActionTypes.SET_SYMBOLS,
    payload: { playerSymbol: data.symbol, opponentSymbol: data.symbol !== 'X' ? 'X' : 'O' },
  });
});

ioSocket.on('move.made', (data) => {
  console.log('MOVE.MATE EVENT: ', data);
  store.dispatch({ type: appActionTypes.SET_OPPONENT_GRID, payload: { opponentCell: data.cell } });
  store.dispatch({
    type: appActionTypes.SET_CURRENT_GAME_STATE,
    payload: { currentGameState: GS_MY_TURN },
  });
});

ioSocket.on('game.won', () => {
  store.dispatch({
    type: appActionTypes.SET_CURRENT_GAME_STATE,
    payload: { currentGameState: GS_YOU_WON },
  });
});

ioSocket.on('game.lost', () => {
  store.dispatch({
    type: appActionTypes.SET_CURRENT_GAME_STATE,
    payload: { currentGameState: GS_YOU_LOST },
  });
});
