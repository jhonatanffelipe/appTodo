import React from "react"
import { View, ScrollView } from "react-native"

import styles from "./style";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <View style={styles.container}>
        <Header showNotification={true} showBack={false} />
    </View>
  )
}