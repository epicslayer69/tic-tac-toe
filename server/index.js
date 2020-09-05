const http = require('http');
const express = require('express');
const socketIo = require('socket.io');

const app = express();
const server = http.Server(app).listen(8080);
const io = socketIo(server);

const clients = {};

// TODO: understand and handle
const opponentOf = (socket) => {
  if (!clients[socket.id].opponent) {
    return;
  }
  return clients[clients[socket.id].opponent].socket;
};


// TODO: implement
const matchmake = (socket) => {

  if (opponentOf(socket)) {
    // If the current player has an opponent the game can begin
    socket.emit('game.begin', {
      // Send the game.begin event to the player
      symbol: players[socket.id].symbol,
    });

    opponentOf(socket).emit('game.begin', {
      // Send the game.begin event to the opponent
      symbol: players[opponentOf(socket).id].symbol,
    });
  }

};

// When a client connects
io.on('connection', (socket) => {
  const socketId = socket.id;

  console.log('[INFO] - Client ID: ', socketId, ' connected');
  
  // Create initial configuration for player
  clients[socketId] = {
    opponent: null,
    symbol: null,
    socket,
  };

  // Client should send name of the current player
  socket.on('set.name', (data) => {
    console.log('[INFO] - Client ID: ', socketId, ' has set name: ', data);
    clients[socketId].name = data;
  });

  //matchmake();

  /**
   * Defines how to handle disconnection
   */
  socket.on('disconnect', () => {
    console.log('[INFO] - Client ID: ', socketId, ' disconnected');
    delete clients[socketId];
    socket.broadcast.emit('clientdisconnect', socketId);
  });

  // TODO: HANDLE THIS - Event to inform player that the opponent left
  socket.on('disconnect', function () {
    // if (opponentOf(socket)) {
    //   opponentOf(socket).emit('opponent.left');
    // }
  });

 
  // Event for when any player makes a move
  socket.on('make.move', (data) => {
    if (!opponentOf(socket)) {
      // This shouldn't be possible since if a player doens't have an opponent the game board is disabled
      return;
    }

    // Validation of the moves can be done here
    socket.emit('move.made', data); // Emit for the player who made the move
    opponentOf(socket).emit('move.made', data); // Emit for the opponent
  });

  
});


