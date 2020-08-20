import React from "react";
import styled from "styled-components";

import EpicSlayer69 from "../img/epic-slayer-69-img.png";
import JoeMamma from "../img/joe-mamma-img.png";
import StatusWrapper from "./status-wrapper";

const RightSideWrapperSC = styled.div`
  .information {
    margin: 30px 100px;
  }

  .epic-slayer-69 {
    margin-bottom: 30px;
  }

  .epic-slayer-69-img {
    width: 125px;
    height: 175px;
    display: block;
    margin: auto;
  }

  .joe-mamma {
    margin-top: 30px
  }

  .joe-mamma-img {
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
  console.log("Props");

  return (
    <RightSideWrapperSC>
      <div class="information">
        <div class="epic-slayer-69">
          <h1>{props.firstPlayerName}</h1>
          <img
            src={EpicSlayer69}
            alt="EpicSlayer69"
            class="epic-slayer-69-img"
          />
        </div>
        <StatusWrapper />
        <div class="joe-mamma">
          <h1>{props.secondPlayerName}</h1>
        </div>
        <img 
          src={JoeMamma} 
          alt="JoeMamma" 
          class="joe-mamma-img" 
        />
      </div>
    </RightSideWrapperSC>
  );
};
