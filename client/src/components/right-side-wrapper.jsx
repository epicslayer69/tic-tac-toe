import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import FirstPlayerImg from "../img/first-player-img.png";
import SecondPlayerImg from "../img/second-player-img.png";
import StatusWrapper from "./status-wrapper";

const RightSideWrapperSC = styled.div`
  .information {
    margin: 90px 100px;
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

export default () => {
  const playerUsername = useSelector((state) => state.playerUsername);
  const opponentUsername = useSelector((state) => state.opponentUsername);

  const mySymbol = useSelector((state) => state.playerSymbol);
  const opSymbol = useSelector((state) => state.opponentSymbol);

  return (
    <RightSideWrapperSC>
      <div className="information">
        <div className="first-player">
          <h1>
            {playerUsername
              ? `${playerUsername}${mySymbol ? ' - ' + mySymbol : ""}`
              : ""}
          </h1>
          <img
            src={FirstPlayerImg}
            alt="First Player"
            className="first-player-img"
          />
        </div>
        <StatusWrapper />
        <div className="second-player">
          <h1>
            {opponentUsername
              ? `${opponentUsername} ${opSymbol ? ' - ' + opSymbol : ""}`
              : ""}
          </h1>
        </div>
        <img
          src={SecondPlayerImg}
          alt="Second Player"
          className="second-player-img"
        />
      </div>
    </RightSideWrapperSC>
  );
};
