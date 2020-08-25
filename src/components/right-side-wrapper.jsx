import React, { useContext } from "react";
import styled from "styled-components";

import FirstPlayerImg from "../img/first-player-img.png";
import SedondPlayerImg from "../img/second-player-img.png";
import StatusWrapper from "./status-wrapper";
import { StateContext } from "../context";

const RightSideWrapperSC = styled.div`
  .information {
    margin: 30px 100px;
  }

  .first-player {
    margin-bottom: 30px;
  }

  .first-player-img {
    width: 125px;
    height: 175px;
    display: block;
    margin: auto;
  }

  .second-player {
    margin-top: 30px;
  }

  .second-player-img {
    width: 150px;
    height: 200px;
    display: block;
    margin: auto;
  }

  h1 {
    text-align: center;
  }
`;

export default (props) => {
  const { username } = useContext(StateContext);

  return (
    <RightSideWrapperSC>
      <div class="information">
        <div class="first-player">
          <h1>{username ? username : ""}</h1>
          <img
            src={FirstPlayerImg}
            alt="First Player"
            class="first-player-img"
          />
        </div>
        <StatusWrapper />
        <div class="second-player">
          <h1>{props.secondPlayerName}</h1>
        </div>
        <img src={SedondPlayerImg} alt="Second Player" class="second-player-img" />
      </div>
    </RightSideWrapperSC>
  );
};
