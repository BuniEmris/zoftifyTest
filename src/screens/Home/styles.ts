import {StyleSheet} from 'react-native';
import {colors} from 'styles';
export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  devider: {
    height: 12,
    backgroundColor: colors.LIGHT_BG,
  },
  Btn: {
    borderRadius: 8,
    backgroundColor: colors.BLUE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  BtnText: {
    color: colors.WHITE,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 20,
  },
});
