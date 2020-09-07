const http = require('http');
const express = require('express');
const socketIo = require('socket.io');
const { v4: uuidv4 } = require('uuid');

const app = express();
const server = http.Server(app).listen(8080);
const io = socketIo(server);

const GS_FIRST_PLAYER_MOVE = 'gs_first_player_move';
const GS_SECOND_PLAYER_MOVE = 'gs_second_player_move';

const clients = {};
const games = {};

/**
 *
 * @param {*} socket socket thats currently handling
 * @return {Socket.io} oponnents socket
 */
const opponentOf = (socket) => {
  // player has no oponnent ?
  if (!clients[socket.id].opponent) {
    return false;
  }
  // returns opponents socket
  const opponentSocketId = clients[socket.id].opponent;

  return clients[opponentSocketId].socket;
};

/**
 * Gets all the unmatched waiting players and match them together
 * There is no special randomizing who is playing with who
 * As the players are in object by keys, order (and who goes first) is unpredictable
 */
const matchmake = () => {
  const unmatchedClientSockets = [];

  // get all unmatched clients
  for (const sockedId of Object.keys(clients)) {
    const client = clients[sockedId];
    if (client.opponent === null && client.name !== null) {
      unmatchedClientSockets.push(client.socket);
    }
  }

  // now iterate over unmatched clients and pair them
  // there is no reason to continue if ther is not enough players
  while (unmatchedClientSockets.length >= 2) {
    const firstUnmatchedClientSocket = unmatchedClientSockets.shift();
    const secondUnmatchedClientSocket = unmatchedClientSockets.shift();

    // pair the clients toghether
    clients[firstUnmatchedClientSocket.id].opponent = secondUnmatchedClientSocket.id;
    clients[firstUnmatchedClientSocket.id].symbol = 'O';
    clients[secondUnmatchedClientSocket.id].opponent = firstUnmatchedClientSocket.id;
    clients[secondUnmatchedClientSocket.id].symbol = 'X';

    // create new game
    const gameId = uuidv4();
    games[gameId] = {
      id: gameId,
      firstPlayer: firstUnmatchedClientSocket.id,
      secondPlayer: secondUnmatchedClientSocket.id,
      state: GS_FIRST_PLAYER_MOVE,
      grid: {
        firstPlayer: [],
        secondPlayer: [], // an opponent
      },
      log: [],
    };

    console.log('GAME', games);

    // sets the game for the players
    clients[firstUnmatchedClientSocket.id].game = gameId;
    clients[secondUnmatchedClientSocket.id].game = gameId;

    // emit new state for players
    firstUnmatchedClientSocket.emit('game.begin', {
      state: GS_FIRST_PLAYER_MOVE,
      anotherPlayerName: clients[secondUnmatchedClientSocket.id].name,
      symbol: 'O',
    });
    secondUnmatchedClientSocket.emit('game.begin', {
      state: GS_SECOND_PLAYER_MOVE,
      anotherPlayerName: clients[firstUnmatchedClientSocket.id].name,
      symbol: 'X',
    });
  }
};

/**
 *
 */
const generateWinningCombinations = (fromTile) => {
  const winningCombinations = [];
  const [colChar, rowNum] = fromTile.split('/');
  const colNum = colChar.charCodeAt(0);
  const leftWinningCol = [fromTile];
  const rightWinningCol = [fromTile];
  const topWinningCol = [fromTile];
  const bottomWinningCol = [fromTile];
  const topRight = [fromTile];
  const bottomRight = [fromTile];
  const bottomLeft = [fromTile];
  const topLeft = [fromTile];
  for (let i = 1; i < 5; i += 1) {
    // horizontal + vertical winning comb from current tile
    leftWinningCol.push(`${String.fromCharCode(colNum - i)}/${rowNum}`);
    rightWinningCol.push(`${String.fromCharCode(colNum + i)}/${rowNum}`);
    topWinningCol.push(`${String.fromCharCode(colNum)}/${parseInt(rowNum, 10) + i}`);
    bottomWinningCol.push(`${String.fromCharCode(colNum)}/${parseInt(rowNum, 10) - i}`);
    // diagonal check from current tile
    topRight.push(`${String.fromCharCode(colNum + i)}/${parseInt(rowNum, 10) - i}`);
    bottomRight.push(`${String.fromCharCode(colNum + i)}/${parseInt(rowNum, 10) + i}`);
    bottomLeft.push(`${String.fromCharCode(colNum - i)}/${parseInt(rowNum, 10) + i}`);
    topLeft.push(`${String.fromCharCode(colNum - i)}/${parseInt(rowNum, 10) - i}`);
  }

  winningCombinations.push(
    leftWinningCol,
    rightWinningCol,
    topWinningCol,
    bottomWinningCol,
    topRight,
    bottomRight,
    topLeft,
    bottomLeft
  );

  return winningCombinations;
};

const checkSimpleArrays = (superset, subset) => subset.every((v) => superset.includes(v));

const checkArrays = (winningCombinations, checkedTiles) => {
  for (const wc of winningCombinations) {
    wc.sort();
    checkedTiles.sort();
    const check = checkSimpleArrays(checkedTiles, wc);
    console.log('CHECKED', checkedTiles, 'WC', wc, 'CHECKED', check);
    return check;
  }
  return false;
};

/**
 * Executes at every turn, checks if someone's not already won
 */
const checkGameState = (gameId, which) => {
  const game = games[gameId];

  let checkedTiles = [];
  if (which === 'first') {
    checkedTiles = games[gameId].grid.firstPlayer;
  }
  if (which === 'second') {
    checkedTiles = games[gameId].grid.secondPlayer;
  }

  // check if current player won after his move
  console.log('GAME', game);
  // this is very dummy, we will just check all the possible combinations from current point

  // eslint-disable-next-line no-restricted-syntax
  for (const tile of checkedTiles) {
    const winningCombinations = generateWinningCombinations(tile);
    const result = checkArrays(winningCombinations, checkedTiles);
    console.log(
      'RESULT',
      result,
      'TILE',
      tile,
      'WINNING',
      winningCombinations,
      'CHECKED',
      checkedTiles
    );
    if (result) {
      if (which === 'first') {
        clients[games[gameId].firstPlayer].socket.emit('game.won');
        clients[games[gameId].secondPlayer].socket.emit('game.lost');
      }
      if (which === 'second') {
        clients[games[gameId].secondPlayer].socket.emit('game.won');
        clients[games[gameId].firstPlayer].socket.emit('game.lost');
      }
      return;
    }
  }
};

/**
 * Just a logging thing
 */
const createLogEntry = () => {};

const findGameId = (socketId) => {
  const gameIds = Object.keys(games);
  for (const gameId of gameIds) {
    if (games[gameId].firstPlayer === socketId) return { gameId: games[gameId].id, which: 'first' };
  }

  for (const gameId of gameIds) {
    if (games[gameId].secondPlayer === socketId)
      return { gameId: games[gameId].id, which: 'second' };
  }
  return false;
};

/**
 * Handling Events - main loop
 */
io.on('connection', (socket) => {
  const socketId = socket.id;

  console.log('[INFO] - Client ID: ', socketId, ' connected');

  // Create initial configuration for player
  clients[socketId] = {
    opponent: null,
    symbol: null,
    name: null,
    socket,
    game: null,
  };

  // Client should send name of the current player
  socket.on('set.name', (data) => {
    console.log('[INFO] - Client ID: ', socketId, ' has set name: ', data);
    clients[socketId].name = data.name;

    // console.info('[INFO] - Current Backend State: ', clients);
    matchmake();
  });

  /**
   * Defines how to handle disconnection
   */
  socket.on('disconnect', () => {
    console.log('[INFO] - Client ID: ', socketId, ' disconnected');
    delete clients[socketId];
    socket.broadcast.emit('clientdisconnect', socketId);
  });

  // TODO: HANDLE THIS - Event to inform player that the opponent left
  socket.on('disconnect', () => {
    // if (opponentOf(socket)) {
    //   opponentOf(socket).emit('opponent.left');
    // }
  });

  // Event for when any player makes a move
  socket.on('move.make', (data) => {
    const opponentsSocket = opponentOf(socket);
    if (!opponentsSocket) {
      // This shouldn't be possible since if a player doens't have an opponent
      // the game board is disabled
      return;
    }

    // updates game grid
    console.info('[INFO] - Client ID: ', socket.id, ' makes move to: ', data.cell);

    // Validation of the moves can be done here
    // TODO:

    // find game and check if there is a winner
    const { gameId, which } = findGameId(socket.id);

    // update games grid
    if (which === 'first') {
      games[gameId].grid.firstPlayer.push(data.cell);
    }

    if (which === 'second') {
      games[gameId].grid.secondPlayer.push(data.cell);
    }

    if (gameId) {
      console.log('Checking game state');
      checkGameState(gameId, which, data.cell);
    }

    // Emit for the player who made the move
    opponentsSocket.emit('move.made', { cell: data.cell });
  });
});
