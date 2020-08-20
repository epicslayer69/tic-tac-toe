import React from "react";
import styled from "styled-components";

import Cell from "./cell";

import cross from "../img/cross-img.svg";
import circle from "../img/circle-img.svg";

const RowSC = styled.tr`
  th {
    background-color: palegreen;
    width: 32px;
    height: 32px;
    text-align: center;
  }

  td {
    background-color: white;
    width: 32px;
    height: 32px;
    border-style: groove;
  }
`;
export default (props) => {
  return (
    <RowSC>
        <th>{props.name}</th>
        <Cell />
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <th>{props.name}</th>
    </RowSC>
  );
};
