import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom"

import * as S from './style'

import api from "../../services/api"
import isConnected from '../../utils/isConnected'

import logo from '../../assets/logo2x.png'
import bell from '../../assets/bell2x.png'

function Header({ clickNotification, showNotification = true }) {
  const [lateCount, setLateCount] = useState()
  const [redirect, setRedirect] = useState(false)

  async function lateVerify() {
    await api.get(`/task/filter/late/${isConnected}`)
      .then(response => {
        setLateCount(response.data.length)
      })
  }

  async function Logout() {
    localStorage.removeItem('@todo/macaddress')
    setRedirect(true)
    window.location.reload()
  }

  useEffect(() => {
    lateVerify()
  }, [])


  return (
    <S.Container>
      {redirect && <Redirect to="/" />}
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

        {isConnected ? <button className="logout" onClick={Logout}>SAIR</button> : <Link to="/qrcode">SINCRONIZAR</Link>}

        {showNotification &&
          <>
            <span className="divider"></span>
            <Link to="/">
              <button id="notification" onClick={clickNotification}>
                <img src={bell} alt="Notificação" />
                <span>{lateCount}</span>
              </button>
            </Link>
          </>
        }

      </S.RightSidde>
    </S.Container>
  );
}

export default Header;
