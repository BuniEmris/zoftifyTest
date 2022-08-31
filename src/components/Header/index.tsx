import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, positionStyles, spacingStyles} from 'styles';
import Logo from 'assets/icons/Logo';
import ArrowBack from 'assets/icons/ArrowBack';
import styles from './styles';
export type OwnProps = {
  icon?: boolean;
  goBack?: () => void;
};
export default function Header({icon, goBack}: OwnProps) {
  return (
    <>
      {icon ? (
        <View
          style={[
            positionStyles.center,
            spacingStyles.pV14,
            {backgroundColor: colors.WHITE},
          ]}>
          <Logo />
        </View>
      ) : (
        <View style={[styles.createPostHeader, spacingStyles.pV14]}>
          <TouchableOpacity style={spacingStyles.mL20} onPress={goBack}>
            <ArrowBack />
          </TouchableOpacity>
          <Text style={styles.headerText}>Create new post</Text>
          <View style={{width: 40}} />
        </View>
      )}
    </>
  );
}
