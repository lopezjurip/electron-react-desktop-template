import React from 'react';
import { View } from 'react-desktop/windows';
import styled from 'styled-components';


const H1 = styled.h1`
  position: absolute;
  top: 25%;
  left: 0px;
  width: 100%;
  text-align: center;
  line-height: 28px;
  font-family: Segoe UI, Frutiger, Frutiger Linotype, Dejavu Sans, Helvetica Neue, Arial, sans-serif;
  font-size: 45px;
  font-weight: 100;
  color: #333;
`;


class Home extends React.Component {
  render() {
    return (
      <View layout="vertical">
        <H1>
          Welcome to React Desktop
        </H1>
      </View>
    );
  }
}

export default Home;
