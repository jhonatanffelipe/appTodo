/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from "react";
import * as S from './style'

import Header from '../../components/Hader'
import Footer from '../../components/Footer'

function QRCode() {
  return (
    <S.Container>
      <Header />

      <S.Content>
        <h1>CAPTURE O QRCODE PELO APP</h1>
        <S.QrCodeArea> </S.QrCodeArea>
        <p>sua atividade serão sicronizadas as do celular</p>
      </S.Content>

      <Footer />
    </S.Container>
  )

}

export default QRCode;