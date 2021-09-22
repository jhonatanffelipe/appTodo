import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  card: {
    width: '95%',
    height: 80,
    flexDirection: "row",
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 5,
    justifyContent: "space-between",
    padding: 10,
    marginBottom: 10
  },
  cardLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "flex-start"
  },
  image: {
    width: 50,
    height: 50
  },
  cardTitle: {
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 16
  },
  cardRight: {
    alignItems: "flex-end",
    justifyContent: "space-between"
  },
  cardDate: {
    fontWeight: 'bold',
    color: '#43D9C7',
    fontSize: 16
  },
  cardTime: {
    color: '#707070'
  },
  done: {
    opacity: 0.5
  }
})

export default styles