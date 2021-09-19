import React from "react";

import * as S from './style'

import logo from '../../assets/logo2x.png'
import bell from '../../assets/bell2x.png'

function Header({ lateCount, clickNotification }) {
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
        <button id="notification" onClick={clickNotification}>
          <img src={bell} alt="Notificação" />
          <span>{lateCount}</span>
        </button>
      </S.RightSidde>
    </S.Container>
  );
}

export default Header;
