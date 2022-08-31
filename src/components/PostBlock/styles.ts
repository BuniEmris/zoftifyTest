import {StyleSheet} from 'react-native';
import {colors} from 'styles';
export default StyleSheet.create({
  blockContainer: {
    backgroundColor: colors.WHITE,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#F1F1F1',
  },
  imageStyle: {
    width: 128,
    height: 128,
    borderRadius: 12,
    marginRight: 16,
    backgroundColor: colors.LIGHT_BG,
    resizeMode: 'stretch',
  },
  title: {
    fontWeight: '500',
    lineHeight: 24,
    fontSize: 18,
    color: '#151C26',
  },
  description: {
    fontWeight: '400',
    color: '#151C26',
    fontSize: 14,
    lineHeight: 20,
  },
  time: {
    fontWeight: '400',
    lineHeight: 16,
    fontSize: 12,
    color: colors.GREY,
  },
  status: {
    borderRadius: 8,
    backgroundColor: colors.LIGHT_GREEN,
    paddingHorizontal: 12,
    paddingVertical: 8,
    alignSelf: 'flex-start',
  },
  statusText: {
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 16,
    color: colors.GREEN,
  },
});
