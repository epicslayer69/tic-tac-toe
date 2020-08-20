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
      <div class="status">
        <h2>
          Game sarted <br />
          Peder is on his turn <br />
          Peder placed cross on I-14 <br />
          Adolf is on his turn <br />
          Adolf placed circle on G-13 <br />
          Peder is on his turn <br />
          Peder placed cross on K-15 <br />
          Adolf is on his turn <br />
          Adolf placed circle on M-12 <br />
          Peder is on his turn <br />
          Peder placed cross on P-12 <br />
          Adolf is on his turn <br />
          Adolf placed circle on O-11 <br />
          Peder is on his turn <br />
          Peder placed cross on Q-13 <br />
          Adolf is on his turn <br />
          Adolf placed circle on U-10 <br />
          Peder is on his turn <br />
          Peder placed cross on R-14 <br />
          Adolf is on his turn <br />
          Adolf placed circle on U-11 <br />
          Peder is on his turn <br />
          Peder placed cross on S-15 <br />
          Adolf is on his turn <br />
          Adolf placed circle on T-16 <br />
          Peder is on his turn <br />
          Peder placed cross on T-15 <br />
          Adolf is on his turn <br />
          Adolf placed circle on U-12 <br />
          Peder is on his turn <br />
          Peder placed cross on V-15 <br />
          Adolf is on his turn <br />
          Adolf placed circle on U-13 <br />
          Peder is on his turn <br />
          Peder placed cross on L-14 <br />
          Adolf is on his turn <br />
          Adolf placed circle on U-14 <br />
          Adolf Won!
        </h2>
      </div>
    </StatusWrapperSC>
  );
};
