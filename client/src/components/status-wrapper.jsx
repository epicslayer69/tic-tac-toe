import React from "react";
import styled from "styled-components";

const StatusWrapperSC = styled.div`
  .status {
    overflow-y: scroll;
    border: 3px solid black;
    width: 500px;
    height: 172px;
    padding: 12px 25px;
  }
`;

export default () => {
  return (
    <StatusWrapperSC>
      <div className="status">
        <h2>
          Game sarted! <br />
        </h2>
      </div>
    </StatusWrapperSC>
  );
};
