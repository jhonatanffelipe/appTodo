import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"

import * as S from './style'

import api from "../../services/api"

import logo from '../../assets/logo2x.png'
import bell from '../../assets/bell2x.png'

function Header({ clickNotification }) {
  const [lateCount, setLateCount] = useState()

  async function lateVerify() {
    await api.get(`/task/filter/late/12:11:11:11:11:11`)
      .then(response => {
        setLateCount(response.data.length)
      })
  }

  useEffect(() => {
    lateVerify()
  }, [])


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
        <Link to="/qrcode">SINCRONIZAR</Link>
        <span className="divider"></span>



        <Link to="/">
          <button id="notification" onClick={clickNotification}>
            <img src={bell} alt="Notificação" />
            <span>{lateCount}</span>
          </button>
        </Link>

      </S.RightSidde>
    </S.Container>
  );
}

export default Header;
