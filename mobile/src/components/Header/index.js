import React from "react"
import { View, Image, TouchableOpacity, Text} from "react-native"

import styles from "./styles";

//ícones
import logo from '../../assets/logo.png'
import back from '../../assets/back.png'
import qrcode from '../../assets/qrcode.png'
import bell from '../../assets/bell.png'

export default function Header({ showNotification = true, showBack = true}) {
  return (
    <View style={styles.header}>
      {showBack
        ? <TouchableOpacity style={styles.qrcodeOpacity}>
            <Image source={back} style={styles.back} />

        </TouchableOpacity>

        : <TouchableOpacity style={styles.qrcodeOpacity}>
          <Image source={qrcode} style={styles.qrcode} />
        </TouchableOpacity>
      }
      <Image source={logo} style={styles.logo} />
      {showNotification &&
        <TouchableOpacity style={styles.notification}>
          <Image source={bell} style={styles.bell} />
          <View style={styles.circle}>
            <Text style={styles.notificationText}>5</Text>
          </View>
        </TouchableOpacity>
      }
    </View>
  )
}