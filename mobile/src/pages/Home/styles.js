import { StyleSheet } from "react-native"

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
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
  },
  content: {
    width: '100%',
    marginTop: 30,
  },
  title: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#260B9E',
    alignItems: 'center'
  },
  titleText:{
    color: '#260B9E',
    fontWeight: 'bold',
    fontSize: 16,
    backgroundColor: '#FFF',
    position: 'relative',
    top: 10,
    paddingHorizontal: 10
  }
})

export default style