import { StyleSheet } from 'react-native';

const CARD_BORDER_RADIUS = 10;

export const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    borderRadius: CARD_BORDER_RADIUS,
    backgroundColor: '#fff',
    marginBottom: 20,
    //overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    marginHorizontal: 15,
  },
  titleLabel: {
    flex: 1,
    padding: 10,
    fontSize: 22,
    fontWeight: '500',
    color: '#999',
  },
  counterLabel: {
    flex: 1,
    textAlign: 'right',
    padding: 20,
    fontSize: 40,
    fontWeight: '700',
    color: '#333',
  },
  counterList: { marginTop: 10 },
  flatListContainer: { paddingBottom: 15 },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#99999977',
    borderRadius: CARD_BORDER_RADIUS,
  },
  addCardContainer: {
    backgroundColor: '#77777766',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  plusButtonContainer: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: '#cccccc99',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 15,
  },
});
