/* eslint-disable no-restricted-globals */
import React, { useState } from "react";
import { Redirect } from "react-router-dom"
import Qr from "qrcode.react"
import * as S from './style'

import Header from '../../components/Hader'
import Footer from '../../components/Footer'

function QRCode() {
  const [mac, setMac] = useState()
  const [redirect, setRedirect] = useState()

  async function SaveMac() {
    if (!mac) {
      return alert("Você precisa informar o número que apareceu no seu celular.")
    }

    await localStorage.setItem('@todo/macaddress', mac)
    setRedirect(true)
    window.location.reload()
  }


  return (
    <S.Container>
      {redirect && <Redirect to="/" />}
      <Header showNotification={false} />
      <S.Content>
        <h1>CAPTURE O QRCODE PELO APP</h1>
        <p>sua atividade serão sicronizadas as do celular.</p>
        <S.QrCodeArea>
          <Qr value='getmacaddress' size={400} />
        </S.QrCodeArea>

        <S.ValidationCode>
          <span>Digite a numeração que apareceu no celular.</span>
          <input type="text" onChange={e => setMac(e.target.value)} value={mac} />
          <button type="button" onClick={SaveMac}>SINCRONIZAR</button>
        </S.ValidationCode>
      </S.Content>

      <Footer />
    </S.Container>
  )

}

export default QRCode;