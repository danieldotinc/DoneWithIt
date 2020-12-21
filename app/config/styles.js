import colors from './colors';

export const defaultStyles = {
  colors,
  textInput: {
    fontSize: 18,
    fontFamily: Platform.OS == 'android' ? 'Roboto' : 'Avenir',
    color: colors.dark,
  },
};
