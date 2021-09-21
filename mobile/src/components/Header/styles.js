import { StyleSheet } from "react-native"

const style = StyleSheet.create({
  header: {
    width: '100%',
    height: 70,
    backgroundColor: '#260B9E',
    borderBottomWidth: 5,
    borderBottomColor: '#43D9C7',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  qrcodeOpacity: {
    position: 'absolute',
    left: 7
  },
  qrcode: {
    width: 35,
    height: 35,
  },
  back: {
    height: 30,
    width: 30
  },
  logo: {
    width: 150,
    height: 50
  },
  notification: {
    position: 'absolute',
    right: 5
  },
  bell: {
    width: 25,
    height: 25,
    marginRight: 15

  },
  circle: {
    width: 25,
    backgroundColor: '#FFF',
    padding: 2,
    borderRadius: 50,
    alignItems: 'center',
    position: 'absolute',
    right: 1,
    bottom: 10,
  },
  notificationText: {
    fontWeight: "bold",
    color: '#43D9C7',
  }
})

export default style