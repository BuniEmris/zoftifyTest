import {StyleSheet} from 'react-native';
import {colors} from 'styles';
export default StyleSheet.create({
  createPostHeader: {
    backgroundColor: colors.WHITE,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F1F1F1',
  },
  headerText: {
    color: colors.BLACK,
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '500',
  },
});
