import { StyleSheet } from 'react-native';

const CARD_BORDER_RADIUS = 10;

export const styles = StyleSheet.create({
  actionButton: {
    borderRadius: CARD_BORDER_RADIUS,
    marginBottom: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    marginHorizontal: 10,
    maxHeight: 50,
    minHeight: 50,
    justifyContent: 'center',
    flex: 1,
  },
  buttonLabel: {
    color: '#333',
    textAlign: 'center',
    padding: 5,
  },
  topActions: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionsContainer: { flex: 1, justifyContent: 'flex-start' },
  container: { flex: 1 },
});
