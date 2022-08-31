import {View, Text, Image} from 'react-native';
import React from 'react';
import {Post} from 'types';
import {colors, positionStyles, spacingStyles} from 'styles';
import styles from './styles';

export type Props = {
  data: Post;
};
export default function PostBlock({data}: Props) {
  return (
    <View
      style={[spacingStyles.mT12, spacingStyles.pH16, styles.blockContainer]}>
      <View style={[positionStyles.row, spacingStyles.pV16]}>
        <Image source={{uri: data.image}} style={styles.imageStyle} />
        <View>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={[styles.time, spacingStyles.mV12]}>
            Created at:{' '}
            <Text style={[styles.time, {color: colors.BLACK}]}>
              {String(data.createdTime)}
            </Text>
          </Text>

          <View
            style={[
              styles.status,
              data.status === 'Draft' && {backgroundColor: colors.LIGHT_RED},
            ]}>
            <Text
              style={[
                styles.statusText,
                data.status === 'Draft' && {color: colors.RED},
              ]}>
              {data.status}
            </Text>
          </View>
        </View>
      </View>
      <View style={spacingStyles.mB18}>
        <Text numberOfLines={2} style={styles.description}>
          {data.description}
        </Text>
      </View>
    </View>
  );
}
