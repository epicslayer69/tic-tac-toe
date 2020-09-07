import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import {useDispatch } from "react-redux";

import { ioSocket } from "../socket";

import svgCrossImg from "../img/cross-img.svg";
import svgCircleImg from "../img/circle-img.svg";

import { GS_WAITING_FOR_OPPONENT_MOVE} from "../constants";

import {appActionTypes} from "../redux";

const CellSC = styled.td`
  img {
    width: 32px;
    height: 32px;
  }
`;

const resolveFilling = (symbol) => {
  
  const crossImg = (<img src={svgCrossImg} alt="cross_img" />);
  const circleImg = (<img src={svgCircleImg} alt="circle_img" />);
  
  
  if (symbol === 'X') return crossImg;
  if (symbol === 'O') return circleImg;
  
  // an empty filling
  return "";
};

/**
 * Here we need some optimizations because we dont want to upgrade whole grid all the time.
 * It is 26x26 cells
 * @param {} props
 */
const Cell = React.memo((props) => {
  console.info('[INFO] Rendering cell with props: ', props);
  const { name, symbol } = props;
  const dispatch = useDispatch();
  
  return (
    <CellSC
      onClick={() => {
        dispatch({type: appActionTypes.SET_PLAYER_GRID, payload: { playerCell: name}});
        ioSocket.emit("move.make", { cell: name });
        dispatch({type: appActionTypes.SET_CURRENT_GAME_STATE, payload: { currentGameState: GS_WAITING_FOR_OPPONENT_MOVE}});
      }}
    >
      {resolveFilling(symbol)}
    </CellSC>
  );
});

Cell.propTypes = {
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
};

export default Cell;
