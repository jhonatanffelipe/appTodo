import React from "react";
import { View, Image, Text, TouchableOpacity} from "react-native"

import styles from "./style";

import check from '../../assets/check2x.png'
import plus from '../../assets/plus2x.png'


export default function Footer({icon}){
  return(
    <View style={styles.footer}>
      <TouchableOpacity style={styles.button}>
        <Image source={icon === 'plus'? plus: check} style={styles.image}/>
      </TouchableOpacity>
      <Text style={styles.text}>Organizando sua vida</Text>
    </View>
  )

}