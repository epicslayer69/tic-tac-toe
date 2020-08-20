import React from "react";
import styled from "styled-components";

import cross from "../img/cross-img.svg";
import circle from "../img/circle-img.svg";
import Row from "./row";

const LeftSideWrapperSC = styled.div`
  th {
    background-color: palegreen;
    width: 32px;
    height: 16px;
    text-align: center;
  }

  td {
    background-color: white;
    width: 32px;
    height: 16px;
    border-style: groove;
  }

  .cross-img {
    width: 16px;
    height: 16px;
    margin-bottom: 3px;
    margin-left: 3px;
  }

  .circle-img {
    width: 16px;
    height: 16px;
    margin-bottom: 3px;
    margin-left: 3px;
  }
`;

export default () => {
  return (
    <LeftSideWrapperSC>
      <table>
        <tr>
          <th></th>
          <th>A</th>
          <th>B</th>
          <th>C</th>
          <th>D</th>
          <th>E</th>
          <th>F</th>
          <th>G</th>
          <th>H</th>
          <th>I</th>
          <th>J</th>
          <th>K</th>
          <th>L</th>
          <th>M</th>
          <th>N</th>
          <th>O</th>
          <th>P</th>
          <th>Q</th>
          <th>R</th>
          <th>S</th>
          <th>T</th>
          <th>U</th>
          <th>V</th>
          <th>W</th>
          <th>X</th>
          <th>Y</th>
          <th>Z</th>
          <th></th>
        </tr>
        <Row name={1} />
        <Row name={2} />
        <Row name={3} />
        <Row name={4} />
        <Row name={5} />
        <Row name={6} />
        <Row name={7} />
        <Row name={8} />
        <Row name={9} />
        <tr>
          <th>10</th>
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
          <td>
            <img src={circle} class="circle-img" />
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <th>10</th>
        </tr>
        <tr>
          <th>11</th>
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
          <td>
            <img src={circle} class="circle-img" />
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <img src={circle} class="circle-img" />
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <th>11</th>
        </tr>
        <tr>
          <th>12</th>
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
          <td>
            <img src={circle} class="circle-img" />
          </td>
          <td></td>
          <td></td>
          <td>
            <img src={cross} class="cross-img" />
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <img src={circle} class="circle-img" />
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <th>12</th>
        </tr>
        <tr>
          <th>13</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <img src={circle} class="circle-img" />
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <img src={cross} class="cross-img" />
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <img src={circle} class="circle-img" />
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <th>13</th>
        </tr>
        <tr>
          <th>14</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <img src={cross} class="cross-img" />
          </td>
          <td></td>
          <td></td>
          <td>
            <img src={cross} class="cross-img" />
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <img src={cross} class="cross-img" />
          </td>
          <td></td>
          <td></td>
          <td>
            <img src={circle} class="circle-img" />
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <th>14</th>
        </tr>
        <tr>
          <th>15</th>
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
          <td>
            <img src={cross} class="cross-img" />
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <img src={cross} class="cross-img" />
          </td>
          <td>
            <img src={cross} class="cross-img" />
          </td>
          <td></td>
          <td>
            <img src={cross} class="cross-img" />
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <th>15</th>
        </tr>
        <tr>
          <th>16</th>
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
          <td>
            <img src={circle} class="circle-img" />
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <th>16</th>
        </tr>
        <Row name={17} />
        <Row name={18} />
        <Row name={19} />
        <Row name={20} />
        <Row name={21} />
        <Row name={22} />
        <Row name={23} />
        <Row name={24} />
        <Row name={25} />
        <Row name={26} />
        <tr>
          <th></th>
          <th>A</th>
          <th>B</th>
          <th>C</th>
          <th>D</th>
          <th>E</th>
          <th>F</th>
          <th>G</th>
          <th>H</th>
          <th>I</th>
          <th>J</th>
          <th>K</th>
          <th>L</th>
          <th>M</th>
          <th>N</th>
          <th>O</th>
          <th>P</th>
          <th>Q</th>
          <th>R</th>
          <th>S</th>
          <th>T</th>
          <th>U</th>
          <th>V</th>
          <th>W</th>
          <th>X</th>
          <th>Y</th>
          <th>Z</th>
          <th></th>
        </tr>
      </table>
    </LeftSideWrapperSC>
  );
};
