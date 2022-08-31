import {StyleSheet} from 'react-native';
import {colors} from 'styles';
export default StyleSheet.create({
  container: {
    marginTop: 8,
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: colors.WHITE,
  },
  titleContainer: {
    backgroundColor: colors.LIGHT_BG,
    paddingHorizontal: 12,
    paddingVertical: 19,
    borderRadius: 8,
  },
  statusContainer: {
    width: '100%',
    backgroundColor: colors.LIGHT_BG,
    borderRadius: 8,
  },
  desContainer: {
    backgroundColor: colors.LIGHT_BG,
    paddingHorizontal: 12,
    paddingVertical: 19,
    borderRadius: 8,
    height: 116,
  },
  titleInput: {
    padding: 0,
    color: colors.BLACK,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 20,
  },
});
