import React from "react";
import {Link} from "react-router-dom"

import * as S from './style'

import logo from '../../assets/logo2x.png'
import bell from '../../assets/bell2x.png'

function Header({ lateCount, clickNotification }) {
  return (
    <S.Container>
      <S.LeftSide>
        <Link to="/">
        <img src={logo} alt="Logo" />
        </Link>
      </S.LeftSide>

      <S.RightSidde>
        <Link to="/">INÍCIO</Link>
        <span className="divider"></span>
        <Link to="/task">NOVA TAREFA</Link>
        <span className="divider"></span>
        <a href="/qrcode">SINCRONIZAR</a>
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
