/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from "react";
import Qr from "qrcode.react"
import * as S from './style'

import Header from '../../components/Hader'
import Footer from '../../components/Footer'

function QRCode() {
  return (
    <S.Container>
      <Header />

      <S.Content>
        <h1>CAPTURE O QRCODE PELO APP</h1>
        <p>sua atividade serão sicronizadas as do celular.</p>
        <S.QrCodeArea>
          <Qr value='getmacaddress' size={400} />
        </S.QrCodeArea>

        <S.ValidationCode>
          <span>Digite a numeração que apareceu no celular.</span>
          <input type="text" />
          <button type="button">SINCRONIZAR</button>
        </S.ValidationCode>




      </S.Content>

      <Footer />
    </S.Container>
  )

}

export default QRCode;