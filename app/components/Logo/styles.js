import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const imageWidth = Dimensions.get('window').width / 2;

export default EStyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  headertext: {
    color: '$white',
    fontSize: 28,
    letterSpacing: -0.5,
    marginTop: 30,
    marginBottom: 15,
    fontWeight: '600',
  },
  logo: {
    width: imageWidth / 2,
    height: imageWidth / 2,
  },
  text: {
    color: '$white',
    fontSize: 20,
    letterSpacing: -0.5,
    marginTop: 15,
    fontWeight: '600',
  },
});
