import { StatusBar } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '$primaryRed',
    borderBottomWidth: 1,
    borderBottomColor: '$border',
    '@media ios': {
      paddingTop: 20,
    },
    '@media android': {
      paddingTop: StatusBar.currentHeight,
    },
  },
  closeButton: {
    width: 40,
    height: 40,
  },
  closeWrapper: {
    width: '100%',
    height: '100%',
  },
  closeText: {
    width: '100%',
    height: '100%',
    fontSize: 30,
    alignItems: 'center',
    paddingLeft: 8,
    color: '$white',
  },
  routeWrapper: {
    alignItems: 'center',
    width: '100% - 40',
  },
  routeText: {
    color: '$white',
  },
});
