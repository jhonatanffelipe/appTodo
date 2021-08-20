import React from "react";

import * as S from './style'

import logo from '../../assets/logo.png'

function Header() {
  return (
    <S.Container>
      <S.LeftSide>
        <img src={logo} alt="Logo" />

      </S.LeftSide>
      <S.RightSidde>

      </S.RightSidde>
    </S.Container>
  );
}

export default Header;
