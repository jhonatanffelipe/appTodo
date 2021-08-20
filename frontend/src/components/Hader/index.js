import React from "react";

import * as S from './style'

import logo from '../../assets/logo2x.png'
import bell from '../../assets/bell2x.png'

function Header() {
  return (
    <S.Container>
      <S.LeftSide>
        <img src={logo} alt="Logo" />
      </S.LeftSide>

      <S.RightSidde>
        <a href="#">INÍCIO</a>
        <span className="divider"></span>
        <a href="#">NOVA TAREFA</a>
        <span className="divider"></span>
        <a href="#">SINCRONIZAR</a>
        <span className="divider"></span>
        <a id="notification" href="#">
        <img src={bell} alt="Notificação" />
        <span>1</span>
        </a>
      </S.RightSidde>
    </S.Container>
  );
}

export default Header;
