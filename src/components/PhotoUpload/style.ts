import {StyleSheet} from 'react-native';
import {colors} from 'styles';
export default StyleSheet.create({
  container: {
    marginTop: 12,
    paddingTop: 16,
    paddingBottom: 20,
    paddingHorizontal: 16,
    backgroundColor: colors.WHITE,
    borderWidth: 1,
    borderColor: '#F1F1F1',
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 24,
    color: colors.BLACK,
  },
  uploadContainer: {
    marginTop: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.LIGHT_BG,
    borderRadius: 12,
    width: 80,
    height: 80,
  },
  imgChoose: {
    borderRadius: 12,
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
});
