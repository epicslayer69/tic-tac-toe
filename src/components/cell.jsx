import React, { useState } from "react";
import PropTypes from 'prop-types';

import styled from "styled-components";

import svgCrossImg from "../img/cross-img.svg";
import svgCircleImg from "../img/circle-img.svg";

const CellSC = styled.td`
  td {
    background-color: white;
    width: 32px;
    height: 16px;
    border-style: groove;
  }

  img {
    width: 16px;
    height: 16px;
    margin-bottom: 3px;
    margin-left: 3px;
  }
`;

const resolveFilling = (fill) => {
  if (fill === "cross") {
    return <img src={svgCrossImg} alt="cross_img" />;
  }
  if (fill === "circle") {
    return <img src={svgCircleImg} alt="circle_img" />;
  }
  // an empty filling
  return "";
};

const Cell = (props) => {
  // states are "circle", "cross" and "empty"
  const [fill, setFill] = useState("empty");

  const { player } = props;

  const fillingType = (player === "first") ? "cross" : "circle";

  return (
    <CellSC onClick={() => setFill(fillingType)}>{resolveFilling(fill)}</CellSC>
  );
};

Cell.propTypes = {
  player: PropTypes.string
}

export default Cell;