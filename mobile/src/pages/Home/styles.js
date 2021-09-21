import { StyleSheet } from "react-native"

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  filter:{
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    marginTop: 10
  },
  filterTextActived: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#43D9C7'
  },
  filterTextInative: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#260B9E',
    opacity: 0.5
  }
})

export default style